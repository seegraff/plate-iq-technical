var gulp = require('gulp');
var util = require('gulp-util');
var glob = require("glob");
var src = require('../sources.json');

module.exports = gulp.task('css-compile', function() {
    var app = src.app;
    var static = src.static;
    var bin = static.bin;
    var dev = static.dev;

    var file = static.path + bin.path + bin.css.path + bin.css.files.app;
    var dest = static.path + dev.path + dev.css.path;

    require ('../jobs/css-compile')(file, dest);
});
