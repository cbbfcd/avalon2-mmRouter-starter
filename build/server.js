var webpack = require('webpack'),
	WebpackDevServer = require('webpack-dev-server'),
	path = require('path'),
	config = require('./webpack.config.js');


new WebpackDevServer(webpack(config), {
	hot: true,
    port: 9090,
    publicPath: "/",
    historyApiFallback: true
}).listen(9090, 'localhost', function(err, re){
	if(err){
		console.log('webpack-dev-server start error: ', err);
	}

	console.info('welcome to start wukong on localhost:9090');
})
