var gulp = require('gulp');
var src = require('../sources.json');

module.exports = gulp.task('clean-bin', function() {
    var static = src.static;
    var bin = static.bin;
    var js = bin.js;
    var css = bin.css;
    var fonts = bin.fonts;

    var devPath = static.path + bin.path;

    var files = [
        devPath + js.path + "/*.js",
        devPath + css.path + "/*.css",
        devPath + fonts.path + "/*"
    ]

    return require('../jobs/clean-dirs')(files);
});
