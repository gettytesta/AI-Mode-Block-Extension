function waitForInput(callback) {
  const check = () => {
    const input = document.querySelector('input[name="q"]');
    if (input) callback(input);
    else setTimeout(check, 100);
  };
  check();
}

waitForInput((input) => {
  input.addEventListener('focus', () => {
    if (/ -ai$/.test(input.value)) {
      input.value = input.value.replace(/ -ai$/, '');
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }
  });
});
