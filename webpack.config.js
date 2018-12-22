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
			include: [
				path.resolve(__dirname, 'source')
			],
			exclude: [
				path.resolve(__dirname, 'node_modules')
			],
			loader: 'babel-loader',
			options: {
				presets: ['es2015', 'react']
			}
		}]
	}
};
