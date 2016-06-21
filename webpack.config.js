var path = require('path');

module.exports = {
    entry: "./public/js/app.js",
     //entry: ["./bin/www", "./entry.js"],
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.(jpe?g|png|gif|svg)$/i, loader:'url-loader?limit=100000' }
        ]
    }
};