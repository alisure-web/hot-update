
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: __dirname + "/src/main.js"
    },
    output: {
        path: path.resolve(__dirname, "__build__"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "__build__",
        inline: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/html/test.html"
        })
    ]
};