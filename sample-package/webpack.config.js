const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        }
      }
    }
  },
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
