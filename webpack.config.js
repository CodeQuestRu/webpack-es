import { resolve } from "path";

// Плагины
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Настройки
import * as paths from './_starter/config/paths.js';
console.log(paths);
import * as options from './_starter/config/options.js';
console.log(options);


export default {
  mode: "development",

  entry: "./src/index.js",

  output: {
    path: resolve('./dist'),
    filename: 'main.bundle.js',
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  plugins: [
    // Формирование шаблона
    new HtmlWebpackPlugin({
      template: './_starter/static/template.html',
      title: 'Webpack ES'
    }),
  ]
}