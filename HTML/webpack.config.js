const path = require('path')

const CompressionPlugin = require('compression-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

const isProduction = process.env.NODE_ENV === 'production'

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
]

const productionPlugins = [
  new CopyWebpackPlugin({
    patterns: [
      {
        from: 'public',
        to: '.',
        globOptions: {ignore: ['**/index.html', '**/manifest.json']},
      },
    ],
  }),
  new ForkTsCheckerWebpackPlugin({
    async: !isProduction,
    typescript: {
      memoryLimit: 2048,
      configOverwrite: {
        compilerOptions: {
          incremental: true, // Włączanie incremental TypeScript builds
        },
      },
    },
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
          ['gifsicle', {interlaced: true}],
          ['jpegtran', {progressive: true}],
          ['optipng', {optimizationLevel: 5}],
          [
            'svgo',
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
          ['imagemin-webp', {quality: 75}], // Konwertujemy obrazy na format WebP
        ],
      },
    },
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: 'static', // Generuje raport w formie pliku HTML
    openAnalyzer: false, // Nie otwieraj automatycznie raportu
  }),
]

const usagePlugin = isProduction ? [...plugins, ...productionPlugins] : plugins

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
  optimization: {
    minimize: isProduction,
    minimizer: isProduction ? [new TerserPlugin(), new CssMinimizerPlugin()] : [],
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'cache-loader', // dodajemy cache-loader przed babel-loader
          'thread-loader', // dodajemy thread-loader
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                ['@babel/preset-react', {runtime: 'automatic'}],
                '@babel/preset-typescript',
              ],
              plugins: [['babel-plugin-styled-components', {displayName: !isProduction}]],
            },
          },
        ],
      },
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
      '/global': path.resolve(__dirname, 'src/Common/global'),
      '/Icon': path.resolve(__dirname, 'src/Common/Icon'),
      '/Input': path.resolve(__dirname, 'src/Common/Input'),
      '/MContext': path.resolve(__dirname, 'src/Common/MainContext/type/Context'),
      '/Context/': path.resolve(__dirname, 'src/Common/MainContext/'),
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
  cache: {
    type: 'filesystem',
  },
  plugins: usagePlugin,
}
