const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  // derServer: {
  //   hot: true,
  //   contentBase: path.join(__dirname, 'dist'),
  //   compress: true,
  //   prt:8080
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: path.resolve(__dirname, 'dist/index.html')
    })
  ]
};
