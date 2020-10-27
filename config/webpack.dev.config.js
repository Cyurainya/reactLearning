//开发环境 便于调试
const path = require('path');
const {
  merge
} = require('webpack-merge');
const common = require('./webpack.common.config.js');
// const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'development',
  watch: true,
  output: {
    filename: 'js/[name].[hash:8].bundle.js',
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },

    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[id].[hash].css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../public/index.html"),
      inject: "body",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
  ],

  devtool: 'source-map'
});