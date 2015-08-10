var assets = './src/assets/';
var dest   =  './dist/';

module.exports = {
	svg: {
		glob: assets + "svg/**/*.svg",
		dest: dest + "assets/build/",
	},

	js: {
		src: assets + "js/main.js",
		dest: dest + "assets/build/",	
	},

	vendor: {
		glob: assets + "vendor/**/*",
		dest: dest + "assets/vendor/",
		filter: [], // For anything that gets bundled by Browserify use !path/to/file
	},

	html: {
		glob: "./src/*.html",
		dest: dest,
	},

	less: {
		dir: assets + "less/",
		src: assets + "less/buckle/buckle.less",
		glob: assets + "less/**/*.less",
		dest: dest + "assets/build/",
	}
};