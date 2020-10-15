const config = require('../config/webpack.dev.config');
const webpack = require('webpack');
const path = require('path');
webpack(config, (err, stats) => { // [Stats Object](#stats-object)
  process.stdout.write(stats.toString() + '\\n');
})

// compiler.run((err, stats) => { // [Stats Object](#stats-object)
//   // ...
// });

require('../server/index.js')