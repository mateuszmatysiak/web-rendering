const webpack = require("webpack");

module.exports = {
  mode: "production",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [new webpack.ProvidePlugin({ h: ["preact", "h"] })],
};
