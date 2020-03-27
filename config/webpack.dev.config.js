const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.common.config.js');

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 3000,
    writeToDisk: false,
    hot: true,
  },
});

// module: {
//   rules: [
//     {
//       test: /\.css$/,
//       use: [
//         {
//           loader: MiniCssExtractPlugin.loader,
//           options: {
//             hmr: process.env.NODE_ENV === 'development',
//             reloadAll: true,
//           },
//         },
//         'css-loader',
//       ],
//     },
//   ],
// },