var fs   = require('fs');
var	root = require('../config').root;


module.exports = function() {
	if ( fs.existsSync("./environment/production_env.json") ) {
		return require( root + "/environment/production_env.json");
	} else if ( fs.existsSync("./environment/staging_env.json") ) {
		return require( root + "/environment/staging_env.json");
	} else if ( fs.existsSync("./environment/development_env.json") ) {
		return require( root + "/environment/development_env.json");
	}
	return false;
}