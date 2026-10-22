export default (url, nextLang, currentLang) => {
  const prefix = new RegExp(`^/${currentLang}/`);

  if (nextLang === 'en') {
    return url.replace(prefix, '/');
  }

  return url.replace(prefix, `/${nextLang}/`);
};