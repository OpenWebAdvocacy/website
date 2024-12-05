export default url => {
  var url = new URL(url);
  var hostname = url.hostname;
  if (hostname.startsWith('www.')) {
    hostname = hostname.slice(4);
  }
  return hostname;
};
