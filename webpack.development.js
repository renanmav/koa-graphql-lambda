const path = require("path");

const webpack = require("webpack");

const cwd = process.cwd();

module.exports = {
  mode: "development",
  devtool: "cheap-eval-source-map",
  entry: ["./src/index.local.ts"],
  output: {
    path: path.resolve("build"),
    filename: "index.js"
  },
  watch: true,
  target: "node",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".mjs"]
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      },
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        use: {
          loader: "babel-loader"
        },
        exclude: [/node_modules/],
        include: [path.join(cwd, "src"), path.join(cwd, "../")]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ]
};
