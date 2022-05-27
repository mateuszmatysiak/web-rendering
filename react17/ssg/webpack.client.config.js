const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const sharedConfig = require("./webpack.shared.config.js");

const templateContent = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="data:," />
        <title>React 17 SSG</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
`;

const config = {
  entry: "./src/client/index.jsx",

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
    publicPath: "/",
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
    new HtmlWebpackPlugin({ templateContent }),
    new MiniCssExtractPlugin({ filename: "main.css" }),
  ],
};

module.exports = merge(sharedConfig, config);
