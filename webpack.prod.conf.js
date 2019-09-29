const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'web',
  mode: 'production',
  entry: {
    app: [path.resolve(__dirname, './src/index.tsx')]
  },
  devtool: 'source-map',
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
        NODE_ENV: JSON.stringify('production')
      },
      APP_VERSION: JSON.stringify(`${process.env.npm_package_version}`)
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
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
