module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test:/\.css$/,
      loader:'style-loader!css-loader!autoprefixer-loader'
    },
    {
      test:/\.scss$/,
      loader:'style-loader!css-loader!autoprefixer-loader!sass-loader'
    }
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
 devServer: {
    historyApiFallback: true,
    contentBase: './',
    inline:'true',
    port:3000

  }
};
