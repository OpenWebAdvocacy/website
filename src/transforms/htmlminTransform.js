
import { minify } from 'html-minifier';

const IS_PROD = process.env.NODE_ENV === 'production';

/**
 *
 */
function htmlmin ( options = {} ) {
  return ( content, outputPath ) => {

    // Only prod
    if ( !IS_PROD ) return content;

    // Only .html
    if ( !outputPath.endsWith('.html') )
      return content;

    return minify( content, options );

  };
}

export default htmlmin;
