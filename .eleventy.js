// Eleventy Plugins
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const externalLinksPlugin = require('@sardine/eleventy-plugin-external-links');
const tocPlugin = require('eleventy-plugin-toc');

// Markdown Libraries
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');

// Filters
const dateFilter = require('./src/filters/date-filter.js');
const hostnameFilter = require('./src/filters/hostname-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
const cleanTocFilter = require('./src/filters/clean-toc-filter.js');

// Shortcodes
const imageShortcode = require('./src/shortcodes/image.js');

// Utils
const groupEntriesByYear = require('./src/utils/group-entries-by-year.js');
const { loadPageDetails } = require('./src/utils/page-details.js');
const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

module.exports = config => {
  // Add filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('hostnameFilter', hostnameFilter);
  config.addFilter('w3DateFilter', w3DateFilter);
  config.addFilter('cleanTocFilter', cleanTocFilter);
  config.addFilter("excerpt", (post) => {
    const content = post.replace(/<(style|script)\b[^>]*>[\s\S]*?<\/\1>|<[^>]*>/gi, "");
    return content.substr(0, content.lastIndexOf(" ", 400)) + "...";
  });

  // Add shortcodes
  config.addNunjucksAsyncShortcode('image', imageShortcode);

  // Plugins
  config.addPlugin(rssPlugin);
  config.addPlugin(externalLinksPlugin);
  config.addPlugin(tocPlugin, {
    tags: ['h2', 'h3', 'h4'],
    ul: true,
    flat: false
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
    const pressData = collection.getAll().filter(item => item.data.press)[0]?.data?.press || [];
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
    html: true,
  });

  mdParser
  .use(markdownItAnchor, {
    level: 1,
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: 'before'
    }),
    slugify(s) {
      const formatted = String(s).trim().toLowerCase().replace(/^[\d.]+\s/g, '').replace(/\s+/g, '-');
      return encodeURIComponent(formatted);
    }
  })
  .use(markdownItAttrs);

  return mdParser;
}
