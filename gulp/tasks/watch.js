var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', ['watchify', 'browserify'], function() {
	gulp.watch(config.vendor.glob, ['vendor']);
	gulp.watch(config.less.glob, ['less']);
	gulp.watch(config.svg.glob, ['svg']);
	gulp.watch(config.html.glob, ['html']);
});
