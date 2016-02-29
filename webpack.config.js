var path = require('path');
var config = {
  entry: path.resolve(__dirname, 'app/main.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: "style!css!less" }
    ]
  }
};

module.exports = config;
