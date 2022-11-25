
(() => {

  const details = [...document.querySelectorAll('details')];

  window.addEventListener('beforeprint', event => {
    details.forEach( element => element.setAttribute('open', '') );
  });

  window.addEventListener('afterprint', event => {
    details.forEach( element => element.removeAttribute('open') );
  });

  // @TODO: Move this into eleventy plugin so we perform
  // this at build time, not on the client
  const content = document.querySelector('.content')
  const { children } = content;
  let section;
  [ ...children ].forEach( child => {

    if (child.tagName === 'H2') {
      if (section)
        content.append( section );
      section = document.createElement('section');
      section.classList.add('flow');
    }

    section.append( child );

  });

  if (section)
    content.append( section );

  content.classList.remove('flow');

})();
