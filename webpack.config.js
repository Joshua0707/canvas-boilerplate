

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    filename: 'build.js',
    path: __dirname + '/dist'
  },
  mode: 'development',
  watch: true
};