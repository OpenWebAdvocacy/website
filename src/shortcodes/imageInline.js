
import { readFile } from 'node:fs/promises'
import { extname, join } from 'node:path'

export default async function imageInlineShortcode( path ) {

  const base64Image = await readFile( join( this.eleventy.directories.input, path ), 'base64' );

  let extension = extname( path ).slice( 1 );
  if ( extension === 'svg' ) extension = 'svg+xml';

  return `data:image/${ extension };base64,${ base64Image }`;

}