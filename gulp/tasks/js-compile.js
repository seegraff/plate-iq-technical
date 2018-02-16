var gulp = require('gulp');
var util = require('gulp-util');
var glob = require("glob");
var src = require('../sources.json');

module.exports = gulp.task('js-compile', function() {
    var app = src.app;
    var vendor = src.vendor;
    var static = src.static;
    var bin = static.bin;
    var dev = static.dev;

    var file = static.path + bin.path + bin.js.path + "/app.js";
    var dest = static.path + dev.path + dev.js.path;

    console.log('Compile angular', file, dest);

    require('../jobs/js-compile')(file, dest);
});
