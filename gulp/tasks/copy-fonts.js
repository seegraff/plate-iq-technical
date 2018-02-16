var gulp = require('gulp');
var util = require('gulp-util');
var glob = require("glob");
var src = require('../sources.json');

module.exports = gulp.task('copy-fonts', function() {
    var app = src.app;
    var vendor = src.vendor;
    var static = src.static;
    var bin = static.bin;
    var dev = static.dev;
    var fonts = dev.fonts;
    var oldPaths = [];

    app.files.fonts.forEach(function(path, i) {
        oldPaths.push(vendor.files[0] + path);
        oldPaths.push(app.path + path);
    });

    var newPathBin = static.path + bin.path + fonts.path;
    var newPathDev = static.path + dev.path + fonts.path;

    require ('../jobs/copy-files')(oldPaths, newPathBin);
    require ('../jobs/copy-files')(oldPaths, newPathDev);
});
