// Настройки
import * as options from '../config/webpack.js';


export default () => {
  return {
    module: {
      rules: [
        {
          test: /\.xml$/i,
          use: [
            {
              loader: 'xml-loader',
              options: options.xml
            }
          ],
        }
      ]
    }
  }
}
