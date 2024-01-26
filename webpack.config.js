const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.resolve(__dirname, './dist'),
};

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    index: path.join(PATHS.src, 'index.tsx'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join('index.html'),
    }),
    new Dotenv(),
    new MiniCssExtractPlugin(),
  ],
  output: {
    path: PATHS.dist,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
          },
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    alias: {
      '@': PATHS.src,
      assets: path.join(PATHS.src, '/assets/'),
      components: path.join(PATHS.src, '/components/'),
    },
  },
};
