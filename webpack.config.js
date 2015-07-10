/// <reference path="typings/node/node.d.ts"/>
module.exports = {
	context: __dirname + '/app',
	entry: './index.js',
	output: {	
		path: __dirname + '/app',
		filename: 'bundle.js'
	},
	module: {
	  loaders: [
	    {
	      test: /\.jsx?$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel'
	    }
	  ]
	}
};