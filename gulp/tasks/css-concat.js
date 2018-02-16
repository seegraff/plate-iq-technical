var gulp = require('gulp');
var util = require('gulp-util');
var src = require('../sources.json');

module.exports = gulp.task('css-concat', function() {
    var app = src.app;
    var static = src.static;
    var bin = static.bin;
    var css = bin.css;

    var files = [];

    app.files.css.forEach(function(path, i) {
        files.push(app.path + path);
    });

    var name = css.files.app;
    var dest = static.path + bin.path + css.path;

    var order = [
        "style/fonts/*.scss",
        "style/*.scss"
    ];

    return require('../jobs/concat-files')(files, name, dest, order);
});
