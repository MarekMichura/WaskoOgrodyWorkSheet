module.exports = {
  plugins: {
    autoprefixer: {overrideBrowserslist: ['IE >= 10', 'last 2 versions']},
    'postcss-sort-media-queries': {},
    'postcss-merge-rules': {},
    'postcss-combine-duplicated-selectors': {removeDuplicatedProperties: true},
    'postcss-preset-env': {stage: 3},
    'postcss-discard-unused': {},
    'postcss-minify-gradients': {},
    'postcss-minify-params': {},
    cssnano: {preset: 'default'},
    'postcss-csso': {},
    'postcss-reporter': {clearReportedMessages: true},
  },
}
