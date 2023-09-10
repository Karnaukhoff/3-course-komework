const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
//const isProduction = process.env.NODE_ENV === "production"

module.exports = {
    entry: "./index.js",
    //mode: isProduction ? "production" : "development",
    module: {
        extends: [
            'stylelint-config-standard',
            'stylelint-config-prettier',
            'stylelint-prettier/recommended',
        ],
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
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
              {
                "at-rule-no-unknown": null,
                "scss/at-rule-no-unknown": true,
              },
              {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
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
        "stylelint-scss",
        [new MiniCssExtractPlugin()],
    ],
}
