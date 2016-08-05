/*jslint node: true */
'use strict';

// node modules:
var path = require('path');


module.exports = function(){
    return {
      debug : false,
      output: {
        path : path.join(process.cwd(), '/build'),
        filename: '/src/app/' + '[name].js',
        chunkFilename: '/src/app/' + '[id].js'
      }
    };
};
