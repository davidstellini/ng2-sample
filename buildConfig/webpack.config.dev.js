/*jslint node: true */
'use strict';

//Vars
var args = process.argv.slice(3);
var defaultConfig = require('./webpack.config.all')();
var path = require('path');
var port = 3001; // todo: separate file

//Node modules:
var _ = require('lodash');
var webpack = require('webpack');

//Module
module.exports = function(){
  //
  function getEntriesWithHMR() {
    const webpackHotMiddleware = "webpack-dev-server/client?http://localhost:" + port;

    if (!_.includes(defaultConfig.entry.app, webpackHotMiddleware)) {
        defaultConfig.entry.app.unshift(webpackHotMiddleware);
    }

    return defaultConfig.entry;
  }

  return {
    devtool : 'inline-source-map',
    entry : getEntriesWithHMR(),
    plugins : defaultConfig.plugins.concat(new webpack.HotModuleReplacementPlugin()),
    debug: true,
    devServer : {
      inline: false,
      port : port,
      outputPath : path.join(process.cwd(), '/build'), //WebpackWriteFilePlugin
      stats: {
        colors: true
      },
    },
    noParse: [ /socket.io-client/ ]
  };
};
