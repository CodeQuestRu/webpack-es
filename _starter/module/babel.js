// Настройки
import * as paths from '../config/paths.js';
import * as options from '../config/webpack.js';


export default () => {
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /(node_modules|bower_components)/,
          include: paths.source,
          use: {
            loader: 'babel-loader',
            options: options.babel
          }
        }
      ]
    }
  }
}
