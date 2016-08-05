'use strict';

// imports
var vendorConfig = require('./vendor.config.all');
var loaderConfigFactory = require('./webpack.loaders');
var pluginFactory = require('./webpack.plugins');

// ZzNode modules:
var glob = require('glob-array');
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
        vendor: vendorConfig, // Add third party (NPM) modules
        app :  [p.src + '/boot.ts'] // Bootstrap application
      },
      /* Build paths */
      output: {
        path : p.build,
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].js'
      },
      /* Module resolution */
      resolve: {
        modulesDirectories: ['node_modules'],
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
            loader: 'tslint-loader' },
        ],
        loaders : loaderConfig
      },

      plugins: plugins.loadedPlugins,
      tslint : {
        'emitErrors' : true,
        'failOnHint' : true
      }
    };
};
