// Настройки
import * as options from '../config/webpack.js';


export default () => {
  return {
    module: {
      rules: [
        {
          test: /\.(csv|tsv)$/i,
          use: [
            {
              loader: 'csv-loader',
              options: options.csv
            }
          ],
        }
      ]
    }
  }
}