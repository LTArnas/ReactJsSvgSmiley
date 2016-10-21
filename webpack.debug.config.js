var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    watch: true,
    entry: [
        "webpack/hot/dev-server",
        path.resolve(__dirname, "./src/app.js")
        ],
    output: {
        path: path.resolve(__dirname, "./build"),
        publicPath: "/", // for our webpack-dev-server.
        filename: "app.bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname,"./src")
                ],
            loader: "babel-loader"
        },
        {
            test: /\indexTemplate.debug.hbs$/,
            loader: "handlebars-loader"
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./indexTemplate.debug.hbs")
        })
    ]
};