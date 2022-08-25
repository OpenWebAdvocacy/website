
const path = require('path');
const Image = require("@11ty/eleventy-img");

module.exports = async function imageShortcode(src, alt, className, formats, widths, sizes) {

  const absSrc = `src/${src}`;
  const urlPath = path.dirname(src);
  const outputDir = `./dist/${urlPath}`;

  const metadata = await Image(absSrc, {
    widths: widths || [800],
    formats: formats || ["webp", "jpg"],
    urlPath,
    outputDir,
    filenameFormat: function (id, src, width, format, options) {
      return `${path.parse(src).name}-${id}-${width}.${format}`;
    },
  });

  const imageAttributes = {
    alt,
    sizes,
    class: className,
    loading: "lazy",
    decoding: "async",
  };

  const options = {
    whitespaceMode: 'inline',
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes, options);

};
