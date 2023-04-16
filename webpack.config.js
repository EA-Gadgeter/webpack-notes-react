const path = require("path");

/** @type {import('webpack').Configuration} */

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
    }
}