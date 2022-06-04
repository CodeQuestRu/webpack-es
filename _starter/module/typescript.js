// Настройки
import * as options from '../config/webpack.js';


export default () => {
  return {
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          // exclude: /(node_modules|bower_components)/,
          // include: paths.source,
          use: {
            loader: 'ts-loader',
            options: options.typescript
          }
        }
      ]
    }
  }
}
