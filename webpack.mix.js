const tailwindcss = require('tailwindcss');
const mix = require('laravel-mix');

mix //.js('./src/assets/js/theme.js', 'theme/assets')
  //.js('./src/assets/js/customers.js', 'theme/assets')
  // .sass('./src/assets/scss/collection.scss', 'theme/assets')
  .sass('./src/assets/scss/theme.scss', 'theme/assets')
  // .sass('./src/assets/scss/page.scss', 'theme/assets')
  // .sass('./src/assets/scss/product.scss', 'theme/assets')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.config.js') ],
  });