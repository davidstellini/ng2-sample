'use strict';

module.exports = function(paths){
  //Webpack + plugins
  var webpack = require('webpack');
  var HtmlWebpackPlugin = require('html-webpack-plugin');

  return {
    loadedPlugins : [
      // new webpack.optimize.DedupePlugin(),
      // new webpack.optimize.UglifyJsPlugin(),
      new HtmlWebpackPlugin({
            template:  paths.src + '/index.ejs',
            filename: 'index.html'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: ['polyfills', 'vendor'].reverse()
      }),
      new webpack.ProvidePlugin({
          $: "jquery"
      })
      ]
  };
};
