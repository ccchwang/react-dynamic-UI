module.exports = {
  context: __dirname,
  entry: './examples/app.js',
  output: {
    path: __dirname,
    filename: './examples/bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
