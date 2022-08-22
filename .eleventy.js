// Eleventy Plugins
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const externalLinksPlugin = require('@sardine/eleventy-plugin-external-links');
const tocPlugin = require('eleventy-plugin-toc');

// Markdown Libraries
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
const cleanTocFilter = require('./src/filters/clean-toc-filter.js');

// Utils
const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

module.exports = config => {
  // Add filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);
  config.addFilter('cleanTocFilter', cleanTocFilter);

  // Plugins
  config.addPlugin(rssPlugin);
  config.addPlugin(externalLinksPlugin);
  config.addPlugin(tocPlugin, {
    tags: ['h2'],
    ul: true,
  });

  // Returns a collection of blog posts in reverse date order
  config.addCollection('blog', collection => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
  });

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  // Pass through images
  config.addPassthroughCopy('./src/images');

  // Pass through css
  config.addPassthroughCopy('./src/css');

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
    html: true,
  });

  mdParser.use(markdownItAnchor, {
    level: 1,
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: 'before'
    }),
    slugify(s) {
      const formatted = String(s).trim().toLowerCase().replace(/^[\d.]+\s/g, '').replace(/\s+/g, '-');
      return encodeURIComponent(formatted);
    }
  });

  return mdParser;
}
