/// <reference path="typings/node/node.d.ts"/>
module.exports = {
	entry: {
		app: ["webpack/hot/dev-server", "./app/app.js"],
	},
	output: {	
		path: './app',
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