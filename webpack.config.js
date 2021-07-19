const webpack = require('webpack');
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH_PUBLIC = path.resolve(__dirname, "public");
const PATH_SRC = path.resolve(__dirname, 'src');
const PATH_JS = `${PATH_SRC}/js`;

const config = {
  entry: "./src/js/index.jsx",
  output: {
    path: PATH_PUBLIC,
    publicPath: "/",
    filename: "js/index.js",
    chunkFilename: "js/index.chunk.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: "Firefox ESR",
                }
              ],
              "@babel/preset-react"
            ]
          },
        }, {
          loader: 'eslint-loader',
        }]
      },
      {
        test: /\.scss$/,
        use: [
          // extract-text-webpack-plugin has bug in webpack4
          MiniCssExtractPlugin.loader,
          'css-loader?sourceMap',
          'resolve-url-loader',
          'sass-loader?sourceMap',
        ],
      },
      {
        test: /\.(jpg|jpeg|gif|png|woff|woff2|eot|svg|otf|ttf|ico|pdf)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
        exclude: [/node_modules/],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.html'],
    alias: {
      store: `${PATH_JS}/store`,
      controllers: `${PATH_JS}/controllers`,
      scss: `${PATH_SRC}/scss`,
      '@components': `${PATH_JS}/components`,
      '@constants': `${PATH_JS}/constants`,
      '@utils': `${PATH_JS}/utils`,
      routes: `${PATH_JS}/routes`,
      '@bootstrap': `${PATH_JS}/bootstrap`,
      '@assets': `${PATH_SRC}/assets`,
      '@pages': `${PATH_JS}/components/pages`,
      '@layouts': `${PATH_JS}/components/layouts`,
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.[chunkhash].css',
      chunkFilename: 'css/style.[id].[chunkhash].css',
    }),
    new HtmlWebpackPlugin({
      filename: `${PATH_PUBLIC}/index.html`,
      template: `${PATH_SRC}/index.html`,
      inject: 'body',
    })
  ],
  devServer: {
    contentBase: PATH_PUBLIC,
    compress: true,
    port: 9000
  }
};

config.plugins = [
  ...config.plugins,
  new OptimizeCssAssetsPlugin(),
];

module.exports = config;