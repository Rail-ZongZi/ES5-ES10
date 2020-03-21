/**
 * 粽子
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "web",
  // mode: "development",
  entry: {
    "index": "./src/app.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "js/[name].[hash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
        ]
      }
    ]
  },
  devtool: "source-map",
  plugins: [new HtmlWebpackPlugin({
    title: "js设计模式",
    template: "./index.html",
    filename: "index.html",
    favicon: "./favicon.ico",
    inject: true
  })],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    host: '0.0.0.0',
    port: 9000,
    compress: true
  }
};

