/* tslint:disable:object-literal-sort-keys */
import * as path from "path";
import * as webpack from "webpack";
import * as webpackDevServer from "webpack-dev-server";

const root = (args: string): string => {
  return path.join.apply(path, [__dirname].concat(`./`, args));
};

const webpackConfig = {
  entry: {
    bundle: [
      root(`client/index.tsx`),
      root(`style/style.scss`)
    ]
  },
  output: {
    filename: `js/bundle.js`,
    path: root(`build/`)
  },
  devServer: {
    contentBase: path.join(__dirname, `build`),
    compress: false,
    port: 8080,
    historyApiFallback: true
  },
  mode: `development`,
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: [`babel-loader`, `ts-loader`]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: `file-loader`,
            options: {
              name: `css/[name].css`
            }
          },
          {
            loader: `extract-loader`
          },
          {
            loader: `css-loader?-url`
          },
          {
            loader: `postcss-loader`
          },
          {
            loader: `sass-loader`
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `json`],
    alias: {
      "@client": root(`client/`),
      "@build": root(`build/`)
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: `source-map`
};

export default webpackConfig;
