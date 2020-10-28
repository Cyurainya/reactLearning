const path = require("path");
const webpack = require("webpack");
const Manifest = require("webpack-manifest-plugin");
module.exports = {
  output: {
    filename: "[name]_[chunkhash:8].js", //给输出文件的文件名加上hash值
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // include: [path.resolve(__dirname, '../src')],
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  performance: {
    // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告...
    hints: "warning",
    // 开发环境设置较大防止警告
    // 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
    maxEntrypointSize: 5000000,
    // 最大单个资源体积，默认250000 (bytes)
    maxAssetSize: 3000000,
  },
  plugins: [
    new Manifest(),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
};
