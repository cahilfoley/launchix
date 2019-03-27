const path = require('path')

const config = {
  target: 'electron-main',
  devtool: 'source-map',
  entry: path.resolve(process.cwd(), 'src/main/main.ts'),
  output: {
    filename: 'main.js',
    path: path.resolve(process.cwd(), 'dist')
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
  node: {
    __dirname: false,
    __filename: false
  }
}

module.exports = (env, argv) => {
  return config
}
