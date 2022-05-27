const path = require("path");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const sharedConfig = require("./webpack.shared.config.js");

const config = {
  target: "web",

  entry: "./src/client/index.jsx",

  output: {
    path: path.join(__dirname, "./dist/client"),
    filename: "main.js",
    publicPath: "http://localhost:8080/",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
};

module.exports = merge(sharedConfig, config);
