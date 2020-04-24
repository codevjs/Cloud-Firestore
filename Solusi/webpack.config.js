const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    module: {
        rules: [
            /* style and css loader */
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            /* babel loader */
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        /* HTML Webpack Plugin */
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ],
    devServer: {
        contentBase: './dist',
        compress: true,
        hot: true,
        historyApiFallback: true,
        index: 'index.html'
    },
    mode: "development"
};
