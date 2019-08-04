/* tslint:disable:object-literal-sort-keys */
import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const root = (args: string): string => path.join(...[__dirname].concat('./', args));

const webpackConfig = {
  entry: {
    bundle: [root('client/index.tsx'), root('style/style.scss')],
  },
  output: {
    filename: 'js/main.[hash].js',
    path: root('build/'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 8080,
    historyApiFallback: true,
    open: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].css',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'css-loader?-url',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./'), 'node_modules', 'client'],
    extensions: ['.ts', '.tsx', '.js', 'json'],
  },
  plugins: [
    new CopyPlugin([
      {
        from: root('public/'),
        to: root('build/'),
      },
    ]),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: root('public/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
};

export default webpackConfig;
