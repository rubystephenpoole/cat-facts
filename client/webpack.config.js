const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  devtool: "sourcemap",
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.js"],
  output: { filename: "[name].js" },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-class-properties"
          ],
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};
