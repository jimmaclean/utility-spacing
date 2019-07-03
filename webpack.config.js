const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')


module.exports = {
  entry: ['./src/app.js','./src/index.scss'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js'
  },
  mode: 'production',
  module: {
      rules: [{
              test: /\.scss$/,
              use: [
                // {
                //     loader: "file-loader",
                //     options: {
                //         name: "[name].css",
                //         }
                // },
                // { loader:'extract-loader' },
                { loader: MiniCssExtractPlugin.loader},
                { loader:'css-loader' },
                { loader:'sass-loader' }
            ]},
          
      ]},
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html',
    title: 'Utility spacing',
  }),
  new MiniCssExtractPlugin({
    filename: 'main.css'
  }),
  new PurgecssPlugin({
    paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`,  { nodir: true }),
  })]
};