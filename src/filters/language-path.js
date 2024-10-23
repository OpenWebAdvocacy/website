export default (url, nextLanguageBase, currentLanguageCode) => {
  if (nextLanguageBase === '/') {
    return url.replace(`/${currentLanguageCode}`, '');
  }

  if (url.startsWith(nextLanguageBase)) {
    return url;
  }

  return `${nextLanguageBase}${url}`;
};
