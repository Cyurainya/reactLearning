const config = require('../config/webpack.prod.config');
const webpack = require('webpack');

webpack(config, (err, stats) => { // [Stats Object](#stats-object)
  process.stdout.write(stats.toString() + '\\n');
})

// compiler.run((err, stats) => { // [Stats Object](#stats-object)
//   // ...
// });

require('../server/index.js')