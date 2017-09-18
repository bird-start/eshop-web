//# 参考 http://www.css88.com/doc/webpack2/concepts/output/


module.exports = {
  entry: {
    'whatwg-fetch':'whatwg-fetch',
    index: './src/index.js'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js',
    // crossOriginLoading:true, //跨域加载
    // devtoolLineToLine
  },
  devServer: {
    contentBase: "./static_pages",  //以public为根目录提供文件
    historyApiFallback: true,
    inline: true,
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
