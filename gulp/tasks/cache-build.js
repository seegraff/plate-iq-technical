var gulp = require('gulp');
var src = require('../sources.json');

module.exports = gulp.task('cache-build', function() {
    var srcs = src.app.path + src.app.files.html;
    var dest = src.static.path + src.static.bin.path + src.static.bin.js.path;
    return require('../jobs/cache-templates')(srcs, {module: 'app'}, dest);
});
