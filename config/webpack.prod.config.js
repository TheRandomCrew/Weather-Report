const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpackBaseConfig = require('./webpack.common.config.js');

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  performance: {
    hints: 'warning',
  },
  output: {
    pathinfo: false,
  },
  optimization: {
    checkWasmTypes: true,
    chunkIds: false,
    concatenateModules: true,
    flagIncludedChunks: true,
    nodeEnv: 'production',
    sideEffects: true,
    usedExports: true,
    splitChunks: {
      hidePathInfo: true,
      minSize: 30000,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
    },
    noEmitOnErrors: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCssAssetsPlugin({}),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
});
