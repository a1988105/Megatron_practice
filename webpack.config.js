const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")

const port = 9487
const webpack_config  = (env, argv) => {
  const isdev = argv.mode === 'development'
  return {
    entry: getEntry(),
    devServer: {
      hot : true,
      port : port
    },
    devtool: isdev ? 'cheap-module-eval-source-map': 'cheap-module-source-map',
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
    plugins: getPlugins(isdev)
  }
};

const getEntry = (isdev) => {
  isdev ? 
  [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/Index'),
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server'
  ] :
  [
    path.join(__dirname, 'src/Index')
  ]
}

const getPlugins = (isdev) => {
  let plugins = [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
  if (isdev) plugins.push(new webpack.HotModuleReplacementPlugin())
  return plugins
}
 
module.exports = webpack_config
