const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: __dirname + '/',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.html$/, loader: 'html-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/Template HTML/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
