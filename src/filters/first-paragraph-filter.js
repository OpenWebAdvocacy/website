export default function firstParagraphFilter(html, maxLength = 160) {
  if (!html) return '';

  // handles SafeString and any other non-string value
  const str = String(html);

  // Return an empty description for non-string objects used in tag pages
  if (str === '[object Object]') return '';

  // Get the first <p>...</p> anywhere in the page content
  const match = str.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  let text = match ? match[1] : str;

  // Strip any nested tags (links, em, etc.) and collapse whitespace
  text = text.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

  // Strip leading "TL;DR" if there is one, with or without semicolon/colon/dash, case-insensitive
  text = text.replace(/^\s*TL;?DR\s*[:\-–—]*\s*/i, '');

  // Truncate on a word boundary appropriate description length, end with '...'
  if (text.length > maxLength) {
    text = text.slice(0, maxLength).replace(/\s+\S*$/, '') + '…';
  }

  return text;
}