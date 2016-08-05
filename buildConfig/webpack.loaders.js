'use strict';

var pluginsFactory = require('./webpack.plugins');

module.exports = function(paths){
var plugins = pluginsFactory(paths);

return [
    /* Typescript */
    {
      exclude: /(node_modules|buildConfig)/,
      test: /\.ts$/, loader: 'ts-loader'
    },

    /* HTML Loader */
    {
      exclude: /(node_modules|buildConfig)/,
      test: /\.html$/,
      loader: 'html'
    },

    /* File Loader */
    {
      test: /\.(png|gif|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file?name=assets/[hash].[ext]'
    },

    /* CSS Loader */
    {
      test: /\.(less|css)$/,
      loader: "style-loader!css-loader!less-loader",
      exclude: /\.(css|less)$/
    },

    /* JSON Loader */
    { include: /\.json$/, loaders: ['json-loader'] },
  ];
};
