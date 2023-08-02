const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output file name
      },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                
            },
            {
                test: /\.scss$/,
                use: [
                'style-loader', // Inject styles into DOM
                'css-loader',   // Translates CSS into CommonJS
                'sass-loader'   // Compiles Sass to CSS
                ],
              },
        ]
    },
    // generate index.html in dist
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/views/start.html",
            filename: "./index.html",
        }),
        new ESLintPlugin({
            context: path.resolve(__dirname, 'src'),
            extensions: ['js', 'jsx'] // Specify the file extensions to lint
            // Optionally, you can provide additional ESLint options here
          })
    ],

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        port: 8080,
      },
}