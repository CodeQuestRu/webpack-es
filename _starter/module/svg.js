import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';

// Настройки
import * as options from '../config/webpack.js';


export default () => {
  return {
    module: {
      rules: [

        // Объединяет SVG с параметром ?sprite в спрайт для оптимизации

        {
          test: /\.svg$/i,
          // include: /.*\.svg\?sprite$/i,
          use: [
            {
              loader: 'svg-sprite-loader',
              options: options.svg_sprite
            }
          ],
        },


        // Позволяет вставлять SVG как React компоненты

        // {
        //   test: /\.svg$/i,
        //   // exclude: /.*\.svg\?sprite$/i,
        //   issuer: /\.[jt]sx?$/,
        //   use: [
        //     {
        //       loader: '@svgr/webpack',
        //       options: options.svgr
        //     }
        //   ],
        // },
      ]
    },
    plugins: [
      new SpriteLoaderPlugin({ plainSprite: true })
    ]
  }
}
