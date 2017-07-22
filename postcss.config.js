const path = require('path');
const postcssImport = require('postcss-import');
const stylelint = require('stylelint');
const postcssApply = require('postcss-apply');
const postcssCustomMedia = require('postcss-custom-media');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssCustomSelectors = require('postcss-custom-selectors');
const postcssNested = require('postcss-nested');
const reporter = require('postcss-reporter');
const autoprefixer = require('autoprefixer');
const csswring = require('csswring');

const src = path.resolve('./src');
const dist = path.resolve('./dist');

module.exports = (options) => {
  const plugins = [
    postcssImport({
      path: path.join(src, '/css'),
      plugins: [
        stylelint()
      ]
    }),
    postcssApply,
    postcssCustomMedia,
    postcssCustomProperties,
    postcssCustomSelectors,
    postcssNested,
    autoprefixer({
      browsers: ['last 2 versions', '> 5%']
    }),
    reporter({
      clearReportedMessages: true
    }),
  ];
  if (options.env === 'production') {
    plugins.push(csswring());
  }
  return {
    plugins
  };
};
