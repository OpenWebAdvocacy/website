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

  dialog.addEventListener('close', () => {
    document.removeEventListener('click', closeDialog);
  });

  function closeDialog(event) {
    if (!event.target.contains(dialog)) return;
    dialog.close();
  }
})();
