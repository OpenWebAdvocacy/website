(() => {
  const picker = document.querySelector('.language-picker');
  const dialog = document.querySelector('.language-dialog');
  const close = document.querySelector('.language-dialog button');

  picker.addEventListener('click', () => {
    dialog.showModal();
    document.addEventListener('click', closeDialog);
  });

  close.addEventListener('click', () => {
    dialog.close();
  });

  // Fallback for Safari and older browsers which doesn't support closedby="any":
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/closedBy#browser_compatibility
  // Possibly remove in 2028 if shipped in iOS 28
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const inside = event.clientX >= rect.left && event.clientX <= rect.right
        && event.clientY >= rect.top && event.clientY <= rect.bottom;
      if (!inside) dialog.close();
    });
  }
})();
