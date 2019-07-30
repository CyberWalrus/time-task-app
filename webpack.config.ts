/* tslint:disable:object-literal-sort-keys */
import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';

const root = (args: string): string => path.join(...[__dirname].concat('./', args));

const webpackConfig = {
  entry: {
    bundle: [root('client/index.tsx'), root('style/style.scss')],
  },
  output: {
    filename: 'js/bundle.js',
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
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'source-map',
};

export default webpackConfig;
