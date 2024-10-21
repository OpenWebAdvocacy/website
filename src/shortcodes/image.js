import Image, {generateHTML} from '@11ty/eleventy-img';
import {dirname, parse} from 'path';

export default async function imageShortcode(
  src,
  alt,
  className,
  formats,
  widths,
  sizes
) {
  const absSrc = `src/${src}`;
  const urlPath = dirname(src);
  const outputDir = `./dist/${urlPath}`;

  const metadata = await Image(absSrc, {
    widths: widths || [800],
    formats: formats || ['webp', 'jpg'],
    urlPath,
    outputDir,
    filenameFormat: function (id, src, width, format, options) {
      return `${parse(src).name}-${id}-${width}.${format}`;
    }
  });

  const imageAttributes = {
    alt,
    sizes,
    class: className || '',
    loading: 'lazy',
    decoding: 'async'
  };

  const options = {
    whitespaceMode: 'inline'
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return generateHTML(metadata, imageAttributes, options);
}
