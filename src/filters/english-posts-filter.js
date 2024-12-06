// ensures that only the original version of each post is included in the blog collection
export default function (collection) {
  return collection.filter(item => {
    if (item.inputPath) {
      return item.inputPath.startsWith('./src/posts');
    }
    return false;
  });
}
