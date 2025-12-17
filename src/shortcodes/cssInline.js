
import { readFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'

import postcss from 'postcss';
import cssnano from 'cssnano';

import { assign } from 'rgjs7/obj';

const IS_PROD = process.env.NODE_ENV === 'production';

const cache = new Map();

export default function cssInlineShortcode( _defaults={} ) {

  const defaults = assign(
    {
      cssnano: IS_PROD && {
        preset: [
          'default',
          {
            calc: false,
            cssDeclarationSorter: false,
            discardComments: { removeAll: true },
            reduceIdents: false,
          },
        ],
      },
      postcss: {
        map: !IS_PROD && { inline: true },
      },
    },
    _defaults,
  );

  return async function( path, _options={} ) {

    const { input, output } = this.eleventy.directories;

    const options = assign(
      defaults,
      _options,
    );

    const from = join( input, path );

    // Use cache
    if ( cache.has( from ) ) return await cache.get( from );

    // Start process
    const promise = _process( from, options );

    // Save cache
    cache.set( from, promise );

    // Await result
    const result = await promise;

    // Clear cache
    !IS_PROD && cache.delete( from );

    return result;

  }

}

/**
 * @private
 */
async function _process( from, options ) {

  const css = await readFile( resolve( from ) );

  const plugins = [
    options.cssnano && cssnano( options.cssnano ),
  ].filter( Boolean )

  const processor = await postcss( plugins );
  const processed = await processor?.process( css, { from, ...options.postcss } );

  return processed.css;

}