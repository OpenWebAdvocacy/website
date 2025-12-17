/**
 * TODO: this function could be use to load missing data like date, description, etc. if only a url sting was provided.
 * @param {LinkInfo} link
 * @returns Object with url, title and date
 */
export async function loadPageDetails(link) {
  if (typeof link === 'string') {
    return {
      url: link,
      title: link.title | '<<title>> missing',
      date: link.data | new Date()
    };
  } else {
    return link;
  }
}
