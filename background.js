chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === 'loading' &&
    tab.url &&
    tab.url.includes('www.google.com/search')
  ) {
    chrome.storage.sync.get('mode', ({ mode }) => {
      const url = new URL(tab.url);
      const query = url.searchParams.get('q');

      if (!query) return;

      if (mode === '-ai' && !query.includes(' -ai')) {
        url.searchParams.set('q', query + ' -ai');
        chrome.tabs.update(tabId, { url: url.toString() });
      } else if (mode === 'web') {
        if (url.searchParams.get('udm') !== '14') {
          url.searchParams.set('udm', '14');
          chrome.tabs.update(tabId, { url: url.toString() });
        }
      }
    });
  }
});
