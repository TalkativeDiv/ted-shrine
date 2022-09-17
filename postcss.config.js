module.exports = {
  plugins: [
    require('cssnano')({
      preset: 'default',
    }),
    require('stylelint')({
      /* your options */
    }),
    require('postcss-short')(),
    require('autoprefixer'),
    require('postcss-import')(),
  ],
};
