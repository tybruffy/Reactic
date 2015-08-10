var gulp         = require('gulp');
var gutil        = require('gulp-util');
var less         = require('gulp-less');
var rename       = require('gulp-rename');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../config').less;
var handleErrors = require('../util/handleErrors');

gulp.task('less', function() {
	return gulp.src(config.src)
		.pipe(rename("build.css"))
		.pipe(sourcemaps.init())
			.pipe(less({
				paths: [ config.dir+'/unstrapped', config.dir+'assets/less/buckle' ],
				compress: true
			}))
			.on('error', handleErrors)	
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.dest))
});
