export default (url, lang) => {
  if (lang === 'en') {
    return '';
  }

  return url.startsWith(`/${lang}/`)
    ? ''
    : 'inert aria-label="Translation not available"';
};
