/*
* @Author: 28906
* @Date:   2017-09-13 11:03:52
* @Last Modified by:   28906
* @Last Modified time: 2017-09-13 20:21:31
* @Description: webpack.dll.config for more faster
*/

var path = require("path"),
	webpack = require("webpack"),
	bundle=[
		'avalon2',
		'lodash',
	];

	module.exports = {
		entry: {
			vendor: bundle
		},
		output: {
			path: path.join(__dirname, "dist"),
			filename: "[name].js",
　　　　　　library: "[name]"
		},
		plugins: [
	　　　　new webpack.DllPlugin({
	　　　　　　path: path.join(__dirname, "dist", "manifest.json"),
	　　　　　　name: "[name]",
	　　　　　　context: __dirname
	　　　　})
	　　]
	}