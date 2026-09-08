

import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { imageSize } from 'image-size'
import { JSDOM, VirtualConsole } from 'jsdom';

import { assign, forEach } from 'rgjs7/obj';
import { isEmpty } from 'rgjs7/val';

const IS_PROD = process.env.NODE_ENV === 'production';

const REGEX_HREF_EXTERNAL = /^(https|http|):\/\//;
const REGEX_IS_SVG = /\.svg$/;
const REGEX_YOUTUBE_EMBED_ID = /(?:youtu\.be|youtube\.com\/embed)\/([^/?\s]+)/ig;

// Mirrors the markdown-it-anchor config in .eleventy.js (permalink.ariaHidden, symbol '#')
// so glossary terms get the same linkable "#" anchors as headings, despite the
// glossary pages being plain HTML rather than markdown.
const GLOSSARY_ANCHOR_SELECTOR = 'dl.glossary dt[id]';
const GLOSSARY_ANCHOR_CLASS = 'header-anchor';
const GLOSSARY_ANCHOR_SYMBOL = '#';

const JSDOM_ERRORS_IGNORES = [
  'css parsing',
];

const cache = new Map();

const virtualConsole = new VirtualConsole();
virtualConsole.forwardTo( console, { omitJSDOMErrors: true } );
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
      debug: false,
      inputDir: 'src',
      anchors: {
        externalInNewWindow: true,
        setTitle: true,
      },
      iframes: {
        lazyload: true,
        youtubeNoCookie: true,
      },
      images: {
        inlineSvg: true,
        inlineSvgMaxSize: 8,
        setWidthHeight: true,
      },
      glossary: {
        addAnchors: true,
      },
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

    // Iframes
    const iframes = [ ...docElem.querySelectorAll('iframe') ];
    iframes.forEach( element => {

      // Lazyload
      if ( options.iframes?.lazyload && !element.hasAttribute('loading') ) {
        options.debug && console.log(` -> Iframe - Lazyload: ${ element.src }`)
        _setAttrs( element, { loading: 'lazy' });
      }

      // Youtube No Cookie
      if ( options.iframes?.youtubeNoCookie ) {
        const ytEmbedId = [ ...REGEX_YOUTUBE_EMBED_ID.exec( element.src ) ?? [] ].flat().at( 1 );
        if ( ytEmbedId ) {
          const src = `https://www.youtube-nocookie.com/embed/${ ytEmbedId }`;
          options.debug && console.log(` -> Iframe - No cookie: ${ src }`)
          _setAttrs( element, { src });
        }
      }

    });

    // Images
    const images = [ ...docElem.querySelectorAll('img') ];
    images.forEach( element => {

      const src = element.getAttribute('src');
      const hasAltTitle = element.hasAttribute('alt') && element.hasAttribute('title');
      const hasWidthHeight = element.hasAttribute('width') && element.hasAttribute('height');

      const isRemote = REGEX_HREF_EXTERNAL.test( src );
      const isSvg = REGEX_IS_SVG.test( src );

      const path = !isRemote ? join( options.inputDir, src ) : src;

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

    // Glossary terms: add a linkable "#" anchor to each <dt id="…">,
    // matching the markdown-it-anchor output used for headings on blog posts and other md pages.
    if ( options.glossary?.addAnchors ) {
      const terms = [ ...docElem.querySelectorAll( GLOSSARY_ANCHOR_SELECTOR ) ];
      terms.forEach( element => {

        // Skip if an anchor has already been added (eg re-run, or hand-authored)
        if ( element.querySelector(`a.${ GLOSSARY_ANCHOR_CLASS }`) ) return;

        const id = element.getAttribute('id');
        options.debug && console.log(` -> Glossary - Add anchor: ${ id }`)

        _setAttrs( element, { tabindex: '-1' } );

        const anchor = document.createElement('a');
        _setAttrs( anchor, {
          class: GLOSSARY_ANCHOR_CLASS,
          href: `#${ id }`,
          'aria-hidden': 'true',
        });
        anchor.textContent = GLOSSARY_ANCHOR_SYMBOL;

        const firstChild = element.firstChild;
        element.insertBefore( anchor, firstChild );
        element.insertBefore( document.createTextNode(' '), firstChild );
      });
    }

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
