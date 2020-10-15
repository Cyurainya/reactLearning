const path = require('path');

module.exports = {
    entry: {
        app:'./src/index.js',
        framework: ['react', 'react-dom'],
    },
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [{
          test: /\.jsx?$/,
          exclude: [/node_modules/],
          use: {
            loader: 'babel-loader',
        }},

        ]
  },
  externals: {
    'react': 'React'
},
}