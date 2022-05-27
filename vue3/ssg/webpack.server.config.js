const path = require("path");
const { merge } = require("webpack-merge");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackNodeExternals = require("webpack-node-externals");
const sharedConfig = require("./webpack.shared.config.js");

let config = {
  entry: "./src/client/App.vue",

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "App.js",
    library: "App",
    libraryTarget: "commonjs2",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
    ],
  },

  externals: [webpackNodeExternals()],
};

module.exports = merge(sharedConfig, config);
