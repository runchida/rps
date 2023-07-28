const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path');

module.exports = {
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output file name
      },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/, // Match files ending with .css extension
                use: ['style-loader', 'css-loader'], // Use these loaders for .css files
              },
        ]
    },
    // generate index.html in dist
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/views/start.html",
            filename: "./index.html",
        })
    ]
}