var gulp = require("gulp");
var webpack = require("webpack");
var webpackConfigDebug = require("./webpack.debug.config.js");
var webpackStream = require("webpack-stream");
var webpackDevServer = require("webpack-dev-server");

var buildDirectory = "./build/";

// Build, with watch so will rebuild.
gulp.task("dev-build", function() {
    return gulp.src("./src/app.js")
        .pipe(webpackStream(webpackConfigDebug, webpack))
        .pipe(gulp.dest(buildDirectory));
});

// Run the dev server. Note, it doesn't save to disk when rebuilding.
gulp.task("dev-server", function(done) {
    new webpackDevServer(webpack(webpackConfigDebug), {
        contentBase: "build/", // the folder with the content to serve.
        inline: true,
        //hot: true, // We add the plugin manually, in the config!
        //headers: {},
        //stats: {colors: true }
        noInfo: false
    }).listen(8080, "localhost", function(err) {
        if(err) throw err;
        done(err);
    });
});