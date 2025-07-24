
import { readFile } from 'node:fs/promises'
import { extname, join } from 'node:path'

const cache = new Map();

export default async function imageInlineShortcode( path ) {

  const { input } = this.eleventy.directories;

  console.log( 'imageInlineShortcode', path );

  // Use cache
  if ( cache.has( path ) ) return await cache.get( path );

  // Start process
  const promise = _base64ImageFromPath( join( input, path ) );

  // Save cache ( = promise )
  cache.set( path, promise );

  // Await result
  return await promise;

}

/**
 * @private
 */
async function _base64ImageFromPath( path ) {

  const base64Image = await readFile( path, 'base64' );

  let extension = extname( path ).slice( 1 );
  if ( extension === 'svg' ) extension = 'svg+xml';

  return `data:image/${ extension };base64,${ base64Image }`;

}