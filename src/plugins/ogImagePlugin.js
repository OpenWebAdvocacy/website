
import ogImage from 'eleventy-plugin-og-image';

const IS_PROD = process.env.NODE_ENV === 'production';

/**
 * Only register the actual eleventy-plugin-og-image for production builds.
 * Register a dummy shortcode in development so the plugin doesn't impact build time.
 */
export default function ogImagePlugin( eleventyConfig, pluginOptions ) {
  if ( !IS_PROD ) eleventyConfig.addShortcode( 'ogImage', () => '/?this-is-a-noop-in-dev' );
  else eleventyConfig.addPlugin( ogImage, pluginOptions );
}