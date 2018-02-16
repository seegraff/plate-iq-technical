var webpack = require("webpack");
var glob = require("glob");
var path = require("path");

module.exports = function(files) {
    function replaceValues(value) {
        return value.replace(".js", "").replace("/Users/chance/Documents/editor/angular/node_modules/", "");
    }

    var angularPath = path.resolve("../angular");

    files = files.map(function(value) {
        return value.replace("../angular/static/", "");
    });

    var codeMirrorModeFiles = glob.sync(path.resolve(angularPath, "node_modules", "codemirror", "mode", "*", "*.js"));

    codeMirrorModeFiles = codeMirrorModeFiles.map(function(value) {
        return replaceValues(value);
    });

    var codeMirrorAddonFiles = glob.sync(path.resolve(angularPath, "node_modules", "codemirror", "addon", "*", "*.js"));

    codeMirrorAddonFiles = codeMirrorAddonFiles.filter(function(value) {
        return value.includes("/comment/") ||
            value.includes("/edit/") ||
            value.includes("/fold/") ||
            value.includes("/hint/") ||
            value.includes("/lint/") ||
            value.includes("/scroll/") ||
            value.includes("/search/") ||
            value.includes("/selection/") ||
            value.includes("/wrap/");
    });

    codeMirrorAddonFiles = codeMirrorAddonFiles.map(function(value) {
        return replaceValues(value);
    });

    var vendorFiles = [
        "jquery",
        "bootstrap",
        "angular",
        "angular-route",
        "angular-animate",
        "codemirror",
        "github-api",
        "Q",
        "uuid"
    ];

    vendorFiles = vendorFiles.concat(codeMirrorModeFiles);
    vendorFiles = vendorFiles.concat(codeMirrorAddonFiles);

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
