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

    // var files = [];
    //
    // app.files.js.forEach(function(path, i) {
    //     files = files.concat(glob.sync(app.path + path));
    // });
    //
    // var templates = static.path + dev.path + js.path + js.files.templates;
    //
    // files.push(templates);

    var file = glob.sync(static.path + bin.path + bin.js.path + "/*");
    var dest = static.path + dev.path + dev.js.path;

    require('../jobs/js-compile')(file, dest);
});
