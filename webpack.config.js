const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.tsx'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.json', '.tsx'],
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        modules: {
                            localIdentName: "[path][name]__[local]--[hash:base64:5]",
                            localIdentContext: path.resolve(__dirname, "src")
                        },
                        postcssOptions: {
                            plugins: [
                                [
                                    'postcss-preset-env',
                                    {
                                        // Options
                                    },
                                ],
                            ],
                        },
                    },
                },
                // Compiles Sass to CSS
                'sass-loader',
            ],
        }],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })]
}