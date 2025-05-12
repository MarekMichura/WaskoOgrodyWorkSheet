module.exports = {
  plugins: {
    'postcss-sort-media-queries': {},
    'postcss-combine-duplicated-selectors': {removeDuplicatedProperties: true},
    'postcss-preset-env': {stage: 3, autoprefixer: {overrideBrowserslist: ['IE >= 10', 'last 2 versions']}},
    'postcss-minify-gradients': {},
    'postcss-minify-params': {},
    'postcss-csso': {},
    'postcss-reporter': {clearReportedMessages: true},
  },
}
