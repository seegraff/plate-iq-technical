var gulp = require('gulp');
var src = require('../sources.json');

module.exports = gulp.task('clean-prod', function() {
    var static = src.static;
    var prod = static.prod;
    var js = prod.js;
    var css = prod.css;
    var fonts = bin.fonts;

    var prodPath = static.path + prod.path;

    var files = [
        prodPath + js.path + "/*.js",
        prodPath + css.path + "/*.css",
        devPath + fonts.path + "/*"
    ]

    return require('../jobs/clean-dirs')(files);
});
