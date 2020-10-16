

require('../server/index.js')

const config = require('../config/webpack.dev.config');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path')
config.entry.app.unshift("webpack-dev-server/client?http://localhost:9000/");

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true, 
    historyApiFallback: false,
    compress: true,
    open: true
    
});
server.listen(9000);