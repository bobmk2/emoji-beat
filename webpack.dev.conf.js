const path = require('path');
const webpack = require('webpack');
const ForkTsChecker = require('fork-ts-checker-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: [path.join(__dirname, 'static')],
    port: 3001,
    inline: true,
    watchContentBase: true,
    open: true,
    openPage: '',
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:8080'
      },
      {
        context: ['/js'],
        target: 'http://localhost:3001',
        pathRewrite: { '^/js': '' }
      }
    ],
    historyApiFallback: {
      index: '',
      disableDotRule: true
    },
    watchOptions: {
      aggregateTimeout: 1500
    }
  },
  target: 'web',
  mode: 'development',
  entry: {
    app: [path.resolve(__dirname, './src/index.tsx')]
  },
  devtool: 'cheap-module-eval-source-map',
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx']
  },
  output: {
    path: path.resolve(__dirname, './dest/js'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      },
      APP_VERSION: JSON.stringify(`${process.env.npm_package_version} [dev]`)
    }),
    new ForkTsChecker()
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.ts[x]?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              // typeCheck: true,
              fix: false,
              emitErrors: true,
              enforce: 'pre'
            }
          }
        ]
      }
    ]
  }
};
