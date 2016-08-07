var Server = require('karma').Server;

// var gulpProtractor = require('gulp-protractor');
// var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

var s = new Server({
        configFile: __dirname + '/../../karma.conf.js',
        singleRun: true
    }).start();





// function remapCoverage (done, exitCode) {
//     util.log('Remapping coverage to TypeScript format...');
//     gulp.src(config.report.path + 'report-json/coverage-final.json')
//         .pipe(remapIstanbul({
//             basePath: config.src,
//             reports: {
//                 'lcovonly': config.report.path + 'remap/lcov.info',
//                 'json': config.report.path + 'remap/coverage.json',
//                 'html': config.report.path + 'remap/html-report',
//                 'text-summary': config.report.path + 'remap/text-summary.txt'
//             }
//         }))
//         .on('finish', function () {
//             util.log('Test Done with exit code: ' + exitCode);
//             done(exitCode);
//             util.log('Remapping done! View the result in report/remap/html-report');
//         });
// }
