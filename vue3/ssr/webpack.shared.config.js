const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "production",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.vue$/i,
        exclude: /(node_modules)/,
        use: "vue-loader",
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".vue"],
  },

  plugins: [new VueLoaderPlugin()],
};
