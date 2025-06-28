document.getElementById('save').addEventListener('click', async () => {
  const apiKey = document.getElementById('apiKey').value.trim();
  await chrome.storage.local.set({ apiKey });
  document.getElementById('status').textContent = 'Saved!';
  setTimeout(() => document.getElementById('status').textContent = '', 1000);
});

// Restore
chrome.storage.local.get('apiKey').then(({ apiKey }) => {
  if (apiKey) document.getElementById('apiKey').value = apiKey;
});
