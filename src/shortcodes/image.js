
import { dirname, parse } from 'path';

import Image, { generateHTML } from '@11ty/eleventy-img';

import { filter } from 'rgjs7/obj';
import { concat } from 'rgjs7/path';
import { isArray, isObject } from 'rgjs7/val';

const IS_PROD = process.env.NODE_ENV === 'production';

/**
 *
 */
function imageShortcode( _defaults={} ) {

  const defaults = {
    className: null,
    alt: null,
    loading: 'lazy',
    formats: [ IS_PROD && 'avif', 'webp', 'jpg' ].filter( Boolean ),
    widths: [ 1280, 800 ],
    sizes: [
      '(min-width: 1000px) 72vw',
      '100vw'
    ],
    transparent: false,
    ..._defaults
  };

  /**
   * Usage:
   *
   * {% image
   *   imagePath,
   *   title,
   *   options
   * %}
   *
   * Legacy (is converted to above format):
   *
   * {% image
   *   imagePath,
   *   altText,
   *   className,
   *   formats,
   *   widths,
   *   sizes
   * %}
   */
  return async function( src, title, options={}, ...rest ) {

    const { inputPath } = this.page;
    const { input, output } = this.eleventy.directories;
    const { imageShortcodeIgnoreLegacy } = this.ctx;

    // Legacy options
    if (!isObject( options )) {
      options = filter({
        className: options,
        formats: rest.at( 0 ),
        widths: rest.at( 1 ),
        sizes: rest.at( 2 ),
      }, Boolean );
      if ( !imageShortcodeIgnoreLegacy ) {
        console.warn(`WARN: {% image %} options param is not an object (legacy mode).`);
        console.warn(` -> File: ${ inputPath }`);
        console.warn(` -> Image: ${ src }`);
        console.warn(' -> Converted to:', options );
      }
    }

    let { className, alt, loading, formats, widths, sizes, transparent, ...attrs } = { ...defaults, ...options };

    if (isArray( src )) src = src.join('');
    if (isArray( className )) className = className.join(' ');
    if (isArray( sizes )) sizes = sizes.join(', ');

    if ( transparent ) formats = [ ...formats.filter( f => f !== 'jpg' ), 'png' ];

    const absSrc = concat( input, src );
    const urlPath = dirname( src );
    const outputDir = concat( output, urlPath );

    const metadata = await Image( absSrc, {
      formats, widths, urlPath, outputDir,
      filenameFormat: ( id, src, width, format, options ) => {
        return `${ parse( src ).name }-${ id }-${ width }.${ format }`;
      },
    });

    const imageAttributes = filter({
      class: className,
      title, alt: alt ?? title,
      fetchpriority: [
        loading === 'eager' && 'high',
        loading === 'lazy' && 'low',
      ].find( Boolean ),
      decoding: loading === 'lazy' && 'async',
      loading,
      sizes,
      ...attrs,
    }, Boolean );

    return generateHTML( metadata, imageAttributes, { whitespaceMode: 'inline' } );

  };

}

export default imageShortcode;
