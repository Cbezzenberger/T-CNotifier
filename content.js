function sendTerms(text) {
  chrome.runtime.sendMessage({ type: 'tnc_agreement', tnc: text });
}

function detectAgreementClick(e) {
  const target = e.target;
  if (target.matches('button, input[type="button"], input[type="submit"]')) {
    const label = (target.innerText || target.value || '').toLowerCase();
    if (/agree|accept/.test(label)) {
      const tncText = document.body.innerText.slice(0, 4000);
      sendTerms(tncText);
    }
  }
}

document.addEventListener('click', detectAgreementClick, true);

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === 'tnc_summary') {
    alert('T&C summary:\n' + msg.summary);
  }
});
