var webpack = require("webpack");
var glob = require("glob");
var path = require("path");

module.exports = function(files) {
    var angularPath = path.resolve("./");

    files = [files]

    files = files.map(function(value) {
        return value.replace("./static/", "");
    });

    var vendorFiles = [
        "angular",
    ];

    return {
        context: angularPath,
        resolve: {
            extensions: ['', '.js', '.css', '.scss'],
            modulesDirectories: ['node_modules', 'static'],
        },
        entry: {
            app: files,
            vendor: vendorFiles,
        },
        output: {
            filename: "[name].js"
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin(["app", "vendor"], "[name].js"),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                CodeMirror: "codemirror",
                Github: "github-api",
                q: "Q",
                uuid: "uuid/v1"
            })
        ]
    };
};
