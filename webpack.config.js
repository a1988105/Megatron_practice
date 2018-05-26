const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const port = 9487

module.exports = {
    entry: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src/Index'),
      `webpack-dev-server/client?http://localhost:${port}`,
      'webpack/hot/only-dev-server'
    ],
    devServer: {
      hot : true,
      port : port
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader?cacheDirectory"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  };
