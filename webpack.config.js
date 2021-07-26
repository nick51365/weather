const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpeg|jpg|png)$/,
        use: {loader: 'url-loader',}, 
      },
      {
        test: /\.json$/i,
        type: 'javascript/auto',
        loader: 'json-loader',
      }
    ],
  },
};