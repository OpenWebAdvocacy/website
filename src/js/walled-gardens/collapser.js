
(() => {

  const onClick = event => {
    const button = event.currentTarget;
    const collapsed = button.closest('.collapser').querySelector('.collapsed');
    collapsed.classList.remove('collapsed');
    button.remove();
  };

  [...document.querySelectorAll('.collapser > button:first-child')].forEach( element => {
    element.addEventListener('click', onClick, { once: true });
  });

})();
