export default (url, supportedLanguages) => {
  const supportedLanguageCodes = supportedLanguages?.map(lang => lang.code);
  const urlLangCode = url.split('/')[1];

  if (urlLangCode && supportedLanguageCodes?.includes(urlLangCode)) {
    return url.replace(`/${urlLangCode}`, '');
  }

  return url;
};
