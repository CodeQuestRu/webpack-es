// import { resolve } from "path";
import { merge } from 'webpack-merge';

// Плагины
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Настройки
import * as options from './config/webpack.js';

// Модули
import * as modules from './module';


const common = {
  mode: "development",

  entry: options.entry,

  output: options.output,

  resolve: {
    extensions: options.extensions
  },

  plugins: [
    // Формирование шаблона
    new HtmlWebpackPlugin(options.htmlWp),
  ]
}


export default merge(
  common,
  modules.babelLoader()
);