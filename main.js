/* eslint-disable no-console */
const SitemapGenerator = require('./src/index.js');

// create generator
const generator = SitemapGenerator('http://localhost:3000', {
  stripQuerystring: true,
  changeFreq: 'always',
  priorityMap: [1.0, 0.8, 0.6],
  sitemapHost: 'http://test.host.com',
  maxDepth: 0
});

// register event listeners
generator.on('done', () => {
  console.log('sitemap created');
  // sitemaps created
});

// start the crawler
generator.start();
