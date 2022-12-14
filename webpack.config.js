const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  devServer: {
    port: 9000,
    static: {
        directory: path.resolve(__dirname, './dist'),
    },
    devMiddleware: {
        index: 'index.html',
        writeToDisk: true
    }
  },
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  module: {
    rules: [
        {
            test: /\.(png|jpg|webp)$/,
            type: 'asset/resource',
        },
        {
            test: /\.css$/,
            use: [
                'style-loader', 'css-loader'
            ]

        }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'Restaurant Page'
    })
  ]
};