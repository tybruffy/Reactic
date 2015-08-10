var svgstore = require('gulp-svgstore')
var gulp     = require('gulp')
var svgmin   = require('gulp-svgmin')
var config   = require('../config').svg;

gulp.task('svg', function () {
  return gulp.src(config.glob)
	.pipe(svgmin())
	.pipe(svgstore({
		fileName: 'icons.svg', 
		prefix: 'icon-',
		inlineSvg: true,
	}))
	.pipe(gulp.dest(config.dest))
})