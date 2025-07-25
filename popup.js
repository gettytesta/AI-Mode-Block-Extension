// Load and reflect current mode
chrome.storage.sync.get('mode', (data) => {
  var selected = data.mode;
  if (!selected) selected = 'web'
  document.querySelector(`input[value="${selected}"]`).checked = true;
});

// Save user's choice
document.querySelectorAll('input[name="mode"]').forEach(radio => {
  radio.addEventListener('change', () => {
    chrome.storage.sync.set({ mode: radio.value });
  });
});
