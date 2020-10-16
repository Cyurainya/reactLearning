const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry:{
        app:['./src/index.js'],
        framework: ['react', 'react-dom'],
    } ,
    output: {
        filename: 'js/[name]_[chunkhash]_bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: [/node_modules/],
          use: [
            {
            loader: 'babel-loader'
            },
            {
              loader:path.resolve(__dirname,'src/loader/loaderA.js')
            }
          ]
        },
       
        ]
  },
  plugins: [ 
    new webpack.ProvidePlugin({ 
     "React": "react", 
    }), 
   ], 
 
}