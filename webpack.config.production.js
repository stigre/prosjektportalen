var path = require("path"),
    webpack = require('webpack'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
    pkg = require("./package.json"),
    I18nPlugin = require("i18n-webpack-plugin");

module.exports = (minify = false) => {
    const plugins = [
        new I18nPlugin(require("./src/js/Resources/no-NB.json")),
        new webpack.DefinePlugin({
            __VERSION: JSON.stringify(pkg.version)
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|nb/)];
    if (minify) {
        plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                mangle: true,
                compress: {
                    warnings: false, 
                    pure_getters: true,
                    unsafe: true,
                    unsafe_comps: true,
                    screw_ie8: true
                },
                output: {
                    comments: false,
                },
            }),
            new webpack.optimize.AggressiveMergingPlugin());
    }
    let rules = [
        {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        require("babel-preset-es2015"),
                        require("babel-preset-react")
                    ],
                    plugins: [
                        require("babel-plugin-transform-class-properties")
                    ]
                }
            }
        },
        { test: /\.txt$/, use: 'raw-loader' },
        { test: /\.json$/, loader: "json-loader" }
    ]
    let config = {
        cache: true,
        entry: {
            main: ['babel-polyfill', './lib/js/pp.main.js'],
            loader: './lib/js/pp.loader.js'
        },
        output: {
            path: path.join(__dirname, "dist/js"),
            filename: minify ? "pp.[name].min.js" : "pp.[name].js",
            libraryTarget: "umd",
        },
        devtool: "source-map",
        stats: {
            hash: true,
            timing: true,
            assets: true,
            chunks: true,
            modules: true,
            reasons: true,
            children: true
        },
        resolve: {
            extensions: ['.jsx', '.js', '.json', '.txt']
        },
        module: {
            rules: rules,
        },
        plugins: plugins
    };
    return config;
}