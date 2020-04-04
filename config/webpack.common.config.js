const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const buildPath = path.resolve(__dirname, '../dist/')

module.exports = {
  entry: {
    main: './src/main.js',
    autocomplete: './src/autocomplete.js',
    favicon: './src/favicon.ico',
  },
  output: {
    path: buildPath,
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              filename: '[name].css',
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true,
            },
          },
          'css-loader',
        ],
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              esModule: false,
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader:
          'url-loader?limit=10000&mimetype=application/font-woff&name=./src/fonts/[name].[ext]',
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader:
          'url-loader?limit=10000&mimetype=application/font-woff&name=./src/fonts/[name].[ext]',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader:
          'url-loader?limit=10000&mimetype=application/octet-stream&name=./src/fonts/[name].[ext]',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false,
      chunks: ['index'],
      filename: 'index.html',
      favicon: 'src/favicon.ico',
    }),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
  ],
}
