// Returns only the posts that belong to the requested language.
// English posts live at ./src/posts; other languages at ./src/<lang>/posts.
export default function (collection, lang) {
  const basePath = lang === 'en'
    ? './src/posts'
    : `./src/${lang}/posts`;

  return collection.filter(item => {
    if (item.inputPath) {
      return item.inputPath.startsWith(basePath);
    }
    return false;
  });
}
