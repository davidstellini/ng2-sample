/*jslint node: true */
'use strict';

//imports
var vendorConfig = require('./vendor.config.all');
var loaderConfigFactory = require('./webpack.loaders');
var pluginFactory = require('./webpack.plugins');

//Node modules:
var glob = require("glob-array");
var path = require('path');

var p /*paths */ = {
  src : path.join(process.cwd(), 'src'),
  app : path.join(process.cwd(), 'src', 'app'),
  nodeModulesDir : path.join(process.cwd(), 'node_modules'),
  build : path.join(process.cwd(), 'build'),
};

// Init:
var loaderConfig = loaderConfigFactory(p);
var plugins = pluginFactory(p);

module.exports = function(){
  return {
      /* Define entry point. Using requires, all required CSS, .ts files
         and so on, will be loaded */
      entry: {
        polyfills : p.src + '/polyfills.ts',
        app : glob.sync([
              p.app + "/boot.ts" // Bootstrap application
        ]),
        vendor: vendorConfig, // Add third party (NPM) modules
      },
      /* Build paths */
      output: {
        path : path.resolve(process.cwd(), '/build'),
        publicPath: '/',
        filename: 'src/app/' + '[name].js',
        chunkFilename: '/src/app/' + '[id].js'
      },
      /* Module resolution */
      resolve: {
        modulesDirectories: ["node_modules"],
        extensions: ['', '.html', '.less', '.css', '.ts', '.js', '.json'],
        alias: {
          '_' : 'lodash'
        },
        root: true
      },

      /* PreLoaders, used for tslint to fail the build before loading */
      module: {
        preLoaders: [
          { test: /\.ts$/,
            exclude: /(node_modules|typings)/,
            loader: "tslint-loader" },
        ],
        loaders : loaderConfig
      },

      plugins: plugins.loadedPlugins,
      tslint : {
        "emitErrors" : true,
        "failOnHint" : true
      }
    };
};
