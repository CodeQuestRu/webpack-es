// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Настройки
import * as options from '../config/webpack.js';
// const devMode = process.env.NODE_ENV !== "production";


export default () => {
  return {
    // plugins: [
    //   !devMode && new MiniCssExtractPlugin()
    // ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            // {
            //   loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            //   options: options.style
            // },
            {
              loader: "style-loader",
              options: options.style
            },
            {
              loader: "css-loader",
              options: options.css
            },
            // {
            //   loader: 'postcss-loader',
            //   options: options.postcss
            // },
          ]
        }
      ]
    }
  }
}
