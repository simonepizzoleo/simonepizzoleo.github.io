// Imports
const path = require('path');

// Configuration
module.exports = {

	mode: "development",
	devtool: "inline-source-map",

	entry: {
		main: "./js/master.ts",
	},

	output: {
		path: path.resolve(__dirname, './js'),
		filename: "master-min.js"
	},

	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},

	module: {

		rules: [

			{ 
				test: /\.tsx?$/,
				loader: "ts-loader"
			}

		]

	}

};