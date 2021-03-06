const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'javascripts/bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {url: false, sourceMap: true}
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        // options...
                    }
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'stylesheets/majormilestones.css'
        }),
    ]
};