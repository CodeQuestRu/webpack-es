import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';

// Настройки
import * as options from '../config/webpack.js';


export default () => {
  return {
    module: {
      rules: [
        {
          test: /\.(gif|png|jpe?g)$/i,
          type: 'asset/resource'
        }
      ]
    },

    // Оптимизация
    optimization: {
      minimizer: [
        new ImageMinimizerPlugin({
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: options.image
        })
      ]
    }
  }
} 