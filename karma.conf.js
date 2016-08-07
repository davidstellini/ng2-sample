var webpack = require('webpack');

var karmaWebpack = require("karma-webpack");
var karmaJasmine = require('karma-jasmine');
var karmaSourcemapLoader = require('karma-sourcemap-loader');
var karmaCoverage = require('karma-coverage');
var karmaChromeLauncher = require('karma-chrome-launcher');
var webpackConfig = require('./webpack.config.js');

var loaderConfigFactory = require('./buildConfig/webpack.loaders');

module.exports = function(config) {
  // var gulpConfig = require('../gulp/config')();

  /**
   * List of npm packages that imported via `import` syntax
   */
  config.set({

    basePath: '.',
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    reporters: ['progress', 'coverage'],

    preprocessors: {
      // Run this through webpack, and enable inline sourcemaps
      'test/index.ts': ['webpack', 'sourcemap'],
    },

    plugins: [
        karmaWebpack,
        karmaJasmine,
        karmaCoverage,
        karmaChromeLauncher,
        karmaSourcemapLoader
    ],

    // Generate json used for remap-istanbul
    coverageReporter: {
      dir: 'report/',
      reporters: [
        { type: 'json', subdir: 'report-json' }
      ]
    },

    files: [
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
      'test/index.ts'
      // 'node_modules/systemjs/dist/system.src.js'
    ],

    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
      watch: true,
    },
    webpackServer: {
      noInfo: true,
    },

    webpackMiddleware: {
      noInfo: true
    },

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      "/src/": "/base/src/",
      "/app/": "/base/src/app/",
      "/node_modules/": "/base/node_modules/"
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true
  });

}
