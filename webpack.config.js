/*jslint node: true */
'use strict';

//node modules:
var _ = require('lodash');

//Imports:
var webpackConfigParent = require('./buildConfig/webpack.config.all')();
var webpackConfigDev    = null;
var webpackConfigProd   = null;

const prod = "PROD";
const dev = "DEV";

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = dev; // TODO: for now
}

switch (process.env.NODE_ENV)
{
  case prod:
    webpackConfigProd = require('./buildConfig/webpack.config.prod')();
    module.exports = _.extend(webpackConfigParent, webpackConfigProd);
    break;
  case dev:
    webpackConfigDev = require('./buildConfig/webpack.config.dev')();
    module.exports = _.extend(webpackConfigParent, webpackConfigDev);
    break;
}

debugger;
