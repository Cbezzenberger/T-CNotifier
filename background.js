const API_URL = 'https://api.openai.com/v1/chat/completions';

async function getSummary(text) {
  const { apiKey } = await chrome.storage.local.get('apiKey');
  if (!apiKey) {
    console.warn('OpenAI API key not set');
    return 'OpenAI API key not set in extension options.';
  }
  try {
    const resp = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{
          role: 'user',
          content: `Summarize watchouts and irregularities from the following terms and conditions:\n${text}`
        }],
        max_tokens: 150
      })
    });
    const data = await resp.json();
    return data.choices?.[0]?.message?.content || 'No summary returned.';
  } catch (err) {
    console.error('Error contacting OpenAI', err);
    return 'Error contacting OpenAI API';
  }
}

chrome.runtime.onMessage.addListener(async (msg, sender) => {
  if (msg.type === 'tnc_agreement' && sender.tab) {
    const summary = await getSummary(msg.tnc);
    chrome.tabs.sendMessage(sender.tab.id, { type: 'tnc_summary', summary });
  }
});
