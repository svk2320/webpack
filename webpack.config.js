const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'jsx-loader'
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                      loader: 'css-loader',
                      options: {
                        modules: true,
                      },
                    }
                ],
              },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    entry: './src/index.js',
    plugins: [
      new HtmlWebpackPlugin({
       title: 'Caching',
      }),
    ],
    output: {
     filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
}; 

// loader evaluated from right to left or button to top so we have to run 
// css-loader first then only we have to run styled-loader