export default (url, nextLang, currentLang) => {
  if (nextLang === 'en') {
    return url.replace(`/${currentLang}`, '');
  }

  return url.replace(`/${currentLang}`, `/${nextLang}`);
};
