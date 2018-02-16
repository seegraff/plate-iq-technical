var gulp = require('gulp');
var util = require('gulp-util');
var src = require('../sources.json');

module.exports = gulp.task('vendor-concat', function() {
    var app = src.app;
    var static = src.static;
    var dev = static.dev;
    var css = dev.css;
    var files = [];

    src.vendor.files.forEach(function(path, i) {
        files.push(path + "/**/*.css");
    });

    var name = css.files.vendor;
    var dest = static.path + dev.path + css.path;

    var order = [
        "angular",
        "jquery",
        "bootstrap",
    ];

    return require('../jobs/concat-files')(files, name, dest, order);
});
