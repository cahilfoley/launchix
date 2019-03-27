const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(process.cwd(), 'src/index.html'),
  filename: path.resolve(process.cwd(), 'dist/index.html')
})

const config = {
  target: 'electron-renderer',
  devtool: 'source-map',
  entry: {
    app: [
      'webpack/hot/dev-server',
      path.resolve(process.cwd(), 'src/app/renderer.tsx')
    ]
  },
  output: {
    filename: 'renderer.js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: 'http://localhost:8080/dist/'
  },
  devServer: {
    contentBase: path.resolve(process.cwd(), 'dist'),
    publicPath: 'http://localhost:8080/dist/'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    htmlPlugin,
    new webpack.IgnorePlugin(new RegExp('^(fs|ipc)$')),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = (env, argv) => {
  return config
}
