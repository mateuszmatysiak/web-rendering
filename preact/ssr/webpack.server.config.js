const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const sharedConfig = require("./webpack.shared.config.js");

let config = {
  target: "node",

  entry: "./src/server.js",

  output: {
    path: path.join(__dirname, "./dist/server"),
    filename: "main.js",
  },

  externals: [webpackNodeExternals()],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: "css-loader",
      },
    ],
  },
};

module.exports = merge(sharedConfig, config);
