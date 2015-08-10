var gulp   = require('gulp');
var config = require('../config').vendor;
var rename = require('gulp-rename');
var filter = require('gulp-filter');
 

gulp.task('vendor', function() {
	return gulp.src(config.glob)
		.pipe(filter(['*'].concat(config.filter)))
	    .pipe(gulp.dest(config.dest))
});
