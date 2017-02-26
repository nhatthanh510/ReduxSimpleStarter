/**
 * Created by admin on 2/26/2017.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

var PORT = 8080;

new WebpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true,
    stats: { colors: true }
}).listen(PORT, "0.0.0.0", function(err) {
    if (err) {
        console.log(err);
    }

    console.log(':::Server Running::: ==> localhost:' + PORT);
});