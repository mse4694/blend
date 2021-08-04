const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue({ version: 3, runtimeOnly: true })
    .alias({ '@': 'resources/js' })
    .postCss('resources/css/app.css', 'public/css', [
        require("tailwindcss"),
    ])
    .webpackConfig(webpack => {
        return {
            plugins: [
                new webpack.DefinePlugin({
                    '__VUE_OPTIONS_API__': true,
                    '__VUE_PROD_DEVTOOLS__': true
                }),
            ],
            // output: { // use split code
            //     chunkFilename: 'js/[name].js?id=[chunkhash]',
            // }
        };
    })
    .sourceMaps(false)
    .version();
// .disableSuccessNotifications();
