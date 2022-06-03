import { resolve } from "path";

// Плагины
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Настройки
// import * as paths from './_starter/config/paths.js';
// import * as options from './_starter/config/options.js';


export default {
  mode: "development",

  entry: "./src/index.tsx",

  output: {
    path: resolve('./dist'),
    filename: 'main.bundle.js',
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        // include: paths.source,
        use: {
          loader: 'babel-loader',
          // options: options.babel
        }
      }
    ]
  },

  plugins: [
    // Формирование шаблона
    new HtmlWebpackPlugin({
      template: './_starter/static/template.html',
      title: 'Webpack ES'
    }),
  ]
}