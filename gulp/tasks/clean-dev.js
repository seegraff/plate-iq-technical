var gulp = require('gulp');
var src = require('../sources.json');

module.exports = gulp.task('clean-dev', function() {
    var static = src.static;
    var dev = static.dev;
    var js = dev.js;
    var css = dev.css;
    var fonts = dev.fonts;

    var devPath = static.path + dev.path;

    var files = [
        devPath + js.path + "/*.js",
        devPath + css.path + "/*.css",
        devPath + fonts.path + "/*"
    ];

    return require('../jobs/clean-dirs')(files);
});
