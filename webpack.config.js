module.exports = {
  entry: [
  './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicpath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};