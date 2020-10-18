const path = require('path');
const webpack = require('webpack');
const { AutoWebPlugin } = require('web-webpack-plugin');
const autoWebPlugin = new AutoWebPlugin('./src/views/pages', {
    template: path.resolve(__dirname, '../public/index.html'), // HTML 模版文件所在的文件路径
    // 提取出所有页面公共的代码
    commonsChunk: {
        name: 'common', // 提取出公共代码 Chunk 的名称
    },
});

module.exports = {
    entry: {
        app: "webpack-dev-server/client?http://localhost:9000/",
        adManage: './src/views/pages/adManage/adManage.js',
        bdTask: './src/views/pages/bdTask/bdTask.js',
        contract: './src/views/pages/contract/contract.js',
        diagnosis: './src/views/pages/diagnosis/diagnosis.js',
        order: './src/views/pages/order/order.js',
        project: './src/views/pages/project/project.js',
        rebate: './src/views/pages/rebate/rebate.js',
        repaid: './src/views/pages/repaid/repaid.js',
        supp: './src/views/pages/supp/supp.js',
        viewBoard: './src/views/pages/viewBoard/viewBoard.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [ {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, '../src/views'),
            exclude: [/node_modules/, path.resolve(__dirname, './loader')],
            use: [
              'babel-loader',
              {
                loader: path.resolve(__dirname, '../loader/component-loader.js')
              }
            ]
          },]
    },
    performance: {
        // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告...
        hints: "warning",
        // 开发环境设置较大防止警告
        // 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
        maxEntrypointSize: 5000000,
        // 最大单个资源体积，默认250000 (bytes)
        maxAssetSize: 3000000
    },
    plugins: [
        autoWebPlugin,
        new webpack.ProvidePlugin({
            "React": "react",
        }),
    ],

}