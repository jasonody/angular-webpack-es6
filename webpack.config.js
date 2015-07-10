/// <reference path="typings/node/node.d.ts"/>
module.exports = {
	context: __dirname + '/app',
	entry: './index.js',
	output: {	
		path: __dirname + '/app',
		filename: 'bundle.js'
	}
};