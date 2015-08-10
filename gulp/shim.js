module.exports = {
	'jquery': { 
		exports: 'global:$' 
	},
	'jquery-ui': { 
		depends: { 
			'jquery.js': null
		} 
	},
	'backbone': {
		exports: 'global:Backbone' 
	}
}