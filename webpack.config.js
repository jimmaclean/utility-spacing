var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: ['./src/app.js', './src/main.scss'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js'
  },
  module: {
      rules: [{
              test: /\.scss$/,
              use: [{
                loader: "file-loader",
                options: {
                    name: "[name].css",
                    }
                },
                { loader:'extract-loader' },
                { loader:'css-loader' },
                { loader:'sass-loader'}
            ]},
          
      ]},
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html',
    title: 'Utility spacing',
  })]
};