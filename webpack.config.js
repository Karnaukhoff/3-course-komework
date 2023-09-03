const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const isProduction = process.env.NODE_ENV === "production"

module.exports = {
    entry: "./index.js",
    mode: isProduction ? "production" : "development",
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    plugins: [
        /*new CopyPlugin({
            patterns: [{ from: "static", to: "static" }],
        }),*/
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./index.html",
        }),
    ],
}
