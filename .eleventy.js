// Node, libs
import { readFileSync } from 'node:fs';
import { slugify } from 'rgjs7/uri';

// Eleventy Plugins
import {EleventyI18nPlugin} from '@11ty/eleventy';
import rssPlugin from '@11ty/eleventy-plugin-rss';
import externalLinksPlugin from '@sardine/eleventy-plugin-external-links';
import tocPlugin from 'eleventy-plugin-toc';
import ogImagePlugin from './src/plugins/ogImagePlugin.js';

// Markdown Libraries
import markdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItAttrs from 'markdown-it-attrs';

// Filters
import cleanTocFilter from './src/filters/clean-toc-filter.js';
import dateFilter from './src/filters/date-filter.js';
import hostnameFilter from './src/filters/hostname-filter.js';
import englishPostsFilter from './src/filters/english-posts-filter.js';
import removeLanguageCode from './src/filters/remove-language-code-filter.js';
import language from './src/filters/language.js';
import w3DateFilter from './src/filters/w3-date-filter.js';

// Shortcodes
import imageShortcode from './src/shortcodes/image.js';
import imageInlineShortcode from './src/shortcodes/imageInline.js';

// Utils
import groupEntriesByYear from './src/utils/group-entries-by-year.js';
import {loadPageDetails} from './src/utils/page-details.js';

export default config => {
  // Add filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('hostnameFilter', hostnameFilter);
  config.addFilter('w3DateFilter', w3DateFilter);
  config.addFilter('cleanTocFilter', cleanTocFilter);
  config.addFilter('englishPostsFilter', englishPostsFilter);
  config.addFilter('removeLanguageCode', removeLanguageCode);
  config.addFilter('language', language);
  config.addFilter('excerpt', post => {
    const content = post.replace(/<(style|script)\b[^>]*>[\s\S]*?<\/\1>|<[^>]*>/gi, '');
    return content.substr(0, content.lastIndexOf(' ', 400)) + '...';
  });

  // Add shortcodes
  config.addNunjucksAsyncShortcode('image', imageShortcode());
  config.addNunjucksAsyncShortcode('imageInline', imageInlineShortcode);

  // Plugins
  config.addPlugin(rssPlugin);
  config.addPlugin(externalLinksPlugin);
  config.addPlugin(tocPlugin, {
    tags: ['h2', 'h3', 'h4'],
    ul: true,
    flat: false
  });
  config.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'en',
    errorMode: 'allow-fallback'
  });
  config.addPlugin(ogImagePlugin, {
    satoriOptions: {
      fonts: [
        {
          name: 'Kumbh Sans Regular',
          data: readFileSync('./src/css/fonts/KumbhSans-700.woff'),
          weight: 400,
          style: 'normal',
        },
      ],
    },
    sharpOptions: {
      mozjpeg: true,
    },
    outputFileSlug: async ogImage => slugify( ogImage.data.page.filePathStem ),
    outputFileExtension: 'jpeg',
    outputDir: 'images/og/',
    previewDir: 'images/og/preview/',
    shortcodeOutput: async ogImage => ogImage.outputUrl(),
  });

  // Returns a collection of blog posts in reverse date order
  config.addCollection('blog', collection => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
  });

  // Returns list of related-links from all posts and pages,
  // grouped by year (descending): [{ year, entries },...]
  config.addCollection('links', async collection => {
    const posts = [...collection.getFilteredByGlob('./src/posts/*.md')];
    const relatedLinkData = [];
    for (const post of posts) {
      const relatedLinks = post?.data?.relatedLinks || [];
      for (const link of relatedLinks) {
        const linkDetails = await loadPageDetails(link);
        relatedLinkData.push(linkDetails);
      }
    }
    return groupEntriesByYear(relatedLinkData);
  });

  // Returns press-links grouped by year (descending): [{ year, entries },...]
  config.addCollection('press', async collection => {
    const pressData =
      collection.getAll().filter(item => item.data.press)[0]?.data?.press || [];
    const pressLinkData = [];
    for (const link of pressData) {
      const linkDetails = await loadPageDetails(link);
      pressLinkData.push(linkDetails);
    }
    return groupEntriesByYear(pressLinkData);
  });

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  // Pass through images
  config.addPassthroughCopy('./src/images');

  // Pass through css, js
  config.addPassthroughCopy('./src/css');
  config.addPassthroughCopy('./src/js');

  // Pass through files
  config.addPassthroughCopy('./src/files');

  // Set custom markdown library
  config.setLibrary('md', buildMarkdownLibrary());

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};

function buildMarkdownLibrary() {
  const mdParser = markdownIt({
    html: true
  });

  mdParser
    .use(markdownItAnchor, {
      level: 1,
      permalink: markdownItAnchor.permalink.ariaHidden({
        placement: 'before'
      }),
      slugify(s) {
        const formatted = String(s)
          .trim()
          .toLowerCase()
          .replace(/^[\d.]+\s/g, '')
          .replace(/\s+/g, '-');
        return encodeURIComponent(formatted);
      }
    })
    .use(markdownItAttrs);

  return mdParser;
}
