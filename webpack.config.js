const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv')
  .config({ path: __dirname+'/.env' });

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(md|txt)$/,
        type: 'asset/source'
      }
    ],
  },
  resolve: {
    extensions: [".*", '.js', '.jsx'],
    fallback: {
      'path': require.resolve('path-browserify')
    }
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    })
  ].filter(Boolean),
  devServer: {
    static: path.join(__dirname, './dist'),
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
  }
};