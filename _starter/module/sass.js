// Настройки
import * as options from '../config/webpack.js';


export default () => {
  return {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          use: [
            {
              loader: "style-loader",
              options: options.style
            },
            {
              loader: "css-loader",
              options: options.css
            },
            {
              loader: 'sass-loader',
              options: options.sass
            },
          ]
        }
      ]
    }
  }
}
