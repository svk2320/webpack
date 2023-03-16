const HtmlWebpackPlugin = require('html-webpack-plugin');

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
              use: {
                  loader: "babel-loader",
                  options: {
                      cacheDirectory: true,
                      cacheCompression: false,
                      }
                  }
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
    plugins: [
      new HtmlWebpackPlugin({
      }),
}; 

// loader evaluated from right to left or button to top so we have to run 
// css-loader first then only we have to run styled-loader