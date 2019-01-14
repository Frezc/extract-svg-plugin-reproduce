const SpritePlugin = require('extract-svg-sprite-webpack-plugin');

module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: SpritePlugin.loader
      }
    ]
  },
  plugins: [
    new SpritePlugin()
  ]
}