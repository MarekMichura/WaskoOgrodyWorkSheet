const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  devtool: isProduction ? 'source-map' : 'eval',
  optimization: {
    minimize: isProduction,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', ['@babel/preset-react', {runtime: 'automatic'}], '@babel/preset-typescript'],
            plugins: [['babel-plugin-styled-components', {displayName: !isProduction}]],
          },
        },
      },
      // Reguła dla ładowania obrazów
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // Pliki poniżej 8KB będą inline jako Base64
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '/Common': path.resolve(__dirname, 'src/Common'),
      '/Icon': path.resolve(__dirname, 'src/Common/Icon'),
      '/Input': path.resolve(__dirname, 'src/Common/Input'),
      '/Context': path.resolve(__dirname, 'src/Common/MainContext'),
      '/Page': path.resolve(__dirname, 'src/Page'),
    },
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    allowedHosts: 'all',
    compress: true,
    port: 3000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ForkTsCheckerWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: '.',
          globOptions: {ignore: ['**/index.html', '**/manifest.json']},
        },
      ],
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 8192,
      minRatio: 0.8,
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminGenerate,
        options: {
          plugins: [
            ['gifsicle', {interlaced: true}], // Optymalizacja dla GIF
            ['jpegtran', {progressive: true}], // Optymalizacja dla JPEG
            ['optipng', {optimizationLevel: 5}], // Optymalizacja dla PNG
            [
              'svgo',
              {
                // Optymalizacja dla SVG
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false, // Zachowaj viewBox dla skalowalności SVG
                  },
                },
              },
            ],
          ],
        },
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
    }),
  ],
}
