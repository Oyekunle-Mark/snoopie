let path = require('path');

module.exports = {
	mode: 'development',
	entry: [
		'./source/App.js'
	],
	output: {
		path: path.resolve(__dirname),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			options: {
				presets: ['es2015', 'react']
			}
		}]
	}
};
