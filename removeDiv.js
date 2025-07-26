(() => {
  if (window.__removeKevs9ObserverActive__) return;
  window.__removeKevs9ObserverActive__ = true;

  function removeTargetDivs() {
    const elements = document.querySelectorAll('.Kevs9.SLPe5b');
    elements.forEach(el => el.remove());
  }

  removeTargetDivs();

  const observer = new MutationObserver(removeTargetDivs);
  observer.observe(document.body, { childList: true, subtree: true });
})();