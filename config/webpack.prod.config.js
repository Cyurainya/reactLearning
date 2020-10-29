//生产环境 对外服务 已经已经可以正常运行
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config.js");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");
module.exports = merge(common, {
  mode: "production",
  entry: [
    // JS 执行入口文件
    "./src/index.js",
  ],
  output: {
    filename: "js/[name].[hash:8].bundle.js",
  },
  watch: true,
  watchOptions: {
    // 不监听的文件或文件夹，支持正则匹配
    // 默认为空
    ignored: /node_modules/,
    // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高
    // 默认为 300ms
    aggregateTimeout: 300,
    // 判断文件是否发生变化是通过不停的去询问系统指定文件有没有变化实现的
    // 默认每隔1000毫秒询问一次
    poll: 1000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      // {
      //   test: /\.(js|jsx)$/,
      //   use: 'babel-loader',
      //   exclude: /node_modules/,
      // }
    ],
  },
  //优化配置
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      cacheGroups: {
        framework: {
          test: "framework",
          name: "framework",
          enforce: true,
        },
        vendors: {
          priority: -10,
          test: /node_modules/,
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
  // eslint-disable-next-line no-dupe-keys
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require("cssnano"), // cssProcessor压缩插件
        cssProcessorPluginOptions: {
          preset: [
            "default",
            {
              discardComments: {
                removeAll: true,
              },
            },
          ],
        },
        canPrint: true, // 表示插件能够在console中打印信息，默认值是true
      }),
    ],
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      cacheGroups: {
        framework: {
          priority: 100,
          test: "framework",
          name: "framework",
          enforce: true,
        },
        vendors: {
          priority: -10,
          test: /node_modules/,
          name: "vendor",
          enforce: true,
        },
      },
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../public/index.html"),
      inject: "body",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),

    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[id].[hash].css",
    }),
  ],
});
