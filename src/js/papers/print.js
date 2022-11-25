
(() => {

  const details = [...document.querySelectorAll('details')];

  window.addEventListener('beforeprint', event => {
    details.forEach( element => element.setAttribute('open', '') );
  });

  window.addEventListener('afterprint', event => {
    details.forEach( element => element.removeAttribute('open') );
  });

})();
