const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.umd.js',
  output: {
    filename: 'vue.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Vue', // 导出全局变量
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
};
