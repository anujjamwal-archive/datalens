var path = require('path');

const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");


const htmlPlugin = new HtmlWebPackPlugin({
  template: "./ui/public/index.html",
  filename: "./index.html"
});

module.exports = {
    entry: './ui/index.tsx',
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css']
    },
    optimization: {
        minimize: false,
        mergeDuplicateChunks: false,
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        htmlPlugin,
        new webpack.DefinePlugin({ // <-- key to reducing React's size
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CompressionPlugin()
    ],
    devServer: {
        contentBase: './dist'
    },
    mode: 'development',
    devtool: 'inline-source-map',
};