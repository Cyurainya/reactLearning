require("../server/index.js");

const ReactDomServer = require("react-dom/server");
// (async () => {
//  await import App from "../src/App.js";
// })();
const fs = require("fs");
const express = require("express");
const config = require("../config/webpack.dev.config");
const webpack = require("webpack");

const webpackDevMiddleware = require("webpack-dev-middleware");
const expressApp = express();
const webpackHotMiddleware = require("webpack-hot-middleware");
const compiler = webpack(config);

// const serverRender = (req, res, next) => {
//   fs.readFile(path.resolve(__dirname, "../public/index.html"), "utf8", (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(data);
//   });
// };
// const server = new webpackDevMiddleware(compiler, {
//     contentBase: path.resolve(__dirname, '../dist/'), //http文件的根目录
//     hot: true,
//     historyApiFallback: false,
//     compress: true,
//     open: true,
//     inline: true,
//     historyApiFallback: true,
// });

//使用webpoackdevMiddleware模式
// expressApp.get("*", function (req, res) {
//   const content = ReactDomServer.renderToString(App);
//   const template = fs.readFileSync(path.resolve(__dirname, "../public/index.html"), "utf-8");
//   res.send(template.replace("<!--app-->", content));
// });
expressApp.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);
//模块热交替
expressApp.use(webpackHotMiddleware(compiler));

expressApp.use(express.static("../src"));

expressApp.listen(9000, function () {
  console.log("Example app listening on port 9000!\n");
});
