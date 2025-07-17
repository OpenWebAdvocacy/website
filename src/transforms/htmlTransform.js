

import { readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

import { imageSize } from 'image-size'
import { JSDOM, VirtualConsole } from 'jsdom';

import { assign, forEach } from 'rgjs7/obj';
import { isEmpty } from 'rgjs7/val';

const IS_PROD = process.env.NODE_ENV === 'production';

const REGEX_HREF_EXTERNAL = /^(https|http|):\/\//;
const REGEX_IS_SVG = /\.svg$/;

const JSDOM_ERRORS_IGNORES = [
  'css parsing',
];

const cache = new Map();

const virtualConsole = new VirtualConsole();
virtualConsole.sendTo( console, { omitJSDOMErrors: true } );
virtualConsole.on( 'jsdomError', error => {
  if ( JSDOM_ERRORS_IGNORES.includes( error.type ) ) return false;
  console.error( error );
});

/**
 *
 */
function htmlTransform( _options={} ) {

  const options = assign(
    {
      anchors: {
        externalInNewWindow: true,
        setTitle: true,
      },
      images: {
        inlineSvg: false,
        inlineSvgMaxSize: 16,
        setWidthHeight: true,
      },
      debug: false,
    },
    _options
  );

  return function( content, outputPath ) {

    // Only prod
    if ( !IS_PROD ) return content;

    // Only .html
    if ( !outputPath.endsWith('.html') )
      return content;

    // Debug
    options.debug && console.log(`HTML Transform: ${ outputPath }`);

    // Prep DOM
    const jsdom = new JSDOM( content, { virtualConsole } );
    const document = jsdom.window.document;
    const docElem = document.documentElement;

    // Anchors...
    const anchors = [ ...docElem.querySelectorAll('a[href]') ];
    anchors.forEach( element => {

      // Open external links in new tab/window
      if ( options.anchors?.externalInNewWindow ) {
        const href = element.getAttribute('href');
        if ( REGEX_HREF_EXTERNAL.test( href ) ) {
          options.debug && console.log(` -> Anchor - New window: ${ href }`)
          _setAttrs( element, {
            rel: element.getAttribute('rel') ?? 'noopener',
            target: element.getAttribute('target') ?? '_blank',
          });
        }
      }

      // Attributes: title
      if ( options.anchors?.setTitle ) {
        if ( !element.hasAttribute('title') && !isEmpty( element.textContent?.trim() ) ) {
          const href = element.getAttribute('href');
          const title = element.textContent.trim();
          options.debug && console.log(` -> Anchor - Set title: ${ title }, ${ href }`)
          _setAttrs( element, { title } );
        }
      }

    });

    // Images
    const images = [ ...docElem.querySelectorAll('img') ]
    images.forEach( element => {

      const src = element.getAttribute('src');
      const hasAltTitle = element.hasAttribute('alt') && element.hasAttribute('title');
      const hasWidthHeight = element.hasAttribute('width') && element.hasAttribute('height');

      const isRemote = REGEX_HREF_EXTERNAL.test( src );
      const isSvg = REGEX_IS_SVG.test( src );

      const path = !isRemote ? join( './dist', src ) : src;

      // // Check alt / title attrs
      // if ( !hasAltTitle ) {
      //   console.warn(`WARN: Image has no alt/title attrs.`)
      //   console.warn(` -> File: ${ outputPath }`);
      //   console.warn(` -> Image: ${ element.src }`);
      // }

      // Inline SVG
      if ( options.images?.inlineSvg && !isRemote && isSvg ) {
        const buffer = _readFile( path );
        const bufferSize = Math.round( buffer.byteLength / 1024 );
        if ( bufferSize < options.images?.inlineSvgMaxSize ?? 0 ) {
          options.debug && console.log(` -> Image - Inline: ${ src }, ${ bufferSize } kb`)
          element.src = `data:image/svg+xml;base64,${ buffer.toString('base64') }`;
        }
      }

      // Set width / height attrs
      if ( options.images?.setWidthHeight && !isRemote && !hasWidthHeight ) {

        try {
          const buffer = _readFile( path );
          const { width, height } = imageSize( buffer );
          options.debug && console.log(` -> Image - Set width/height: ${ src }, ${ width } x ${ height }`);
          _setAttrs( element, { width, height } );
        }
        catch ( error ) {
          console.warn(` -> WARN: Image - Could not set width/height`)
          console.warn(` -> File: ${ outputPath }`);
          console.warn(` -> Image: ${ path }`);
          throw error;
        }

      }

    });

    return jsdom.serialize();

  };
}

/**
 * @private
 */
function _readFile( path ) {
  if ( cache.has( path ) ) return cache.get( path );
  const buffer = readFileSync( path );
  cache.set( path, buffer );
  return buffer;
}

/**
 * @private
 */
function _setAttrs( element, attrs ) {
  forEach( attrs, ( v, a ) => element.setAttribute( a, v ) );
}

export default htmlTransform;
