document.addEventListener('keydown', (e) => {
  if (
    (e.key !== "Backspace")
    || (["INPUT", "TEXTAREA"].indexOf(document.activeElement.tagName) > -1)
    || (document.activeElement.isContentEditable)
  ) {
    return;
  }

  e.preventDefault();
  window.history.back();
});
