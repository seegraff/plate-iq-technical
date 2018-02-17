var gulp = require('gulp');
var util = require('gulp-util');
var src = require('../sources.json');

module.exports = gulp.task('js-concat', function() {
    var app = src.app;
    var static = src.static;
    var bin = static.bin;
    var js = bin.js;

    var files = [];

    app.files.js.forEach(function(path, i) {
        files[i] = app.path + path;
    });

    var templates = static.path + bin.path + js.path + js.files.templates;

    files.push(templates);

    var name = js.files.app;
    var dest = static.path + bin.path + js.path;
    var order = [
        "app.globals.js",
        "app.module.js",
        "templates.js",
        "app.config.js",
        "*/*.module.js",
        "**/core.class.js",
        "**/*.class.js"
    ];

    return require('../jobs/concat-files')(files, name, dest, order);
});
