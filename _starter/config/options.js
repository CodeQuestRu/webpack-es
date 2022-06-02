import { resolve } from "path";

// Пути
import * as paths from '../../_starter/config/paths.js';

// Вставка переменных
// import themeVariables from  + './config/antd/antd-variables';


/**
   * Базовые настройки
  */

// Входные точки
export const entry = [
  resolve(paths.source, './index.tsx')
];

// Выходная точка
export const output = {
  path: paths.build,
  filename: '[name].[contenthash].js', // Поддержка кеширования
  clean: true
};

// Сервер
export const devServer = {
  static: paths.build
};

// Расширения для импорта
export const extensions = [".ts", ".tsx", ".js"];


/**
 * Лоадеры
*/

// Style Loader
export const style = {};

// Css Loader
export const css = {
  // importLoaders: 1,
  // modules: true
};

// PostCSS Loader
export const postcss = {};

// Less Loader
export const less = {
  lessOptions: {
    javascriptEnabled: true,
    // modifyVars: themeVariables
  }
};

// Sass Loader
export const sass = {};

// Babel
export const babel = {};

// XML
export const xml = {};

// CSV
export const csv = {};

// Изображения
export const image = {
  plugins: [
    ["gifsicle", { interlaced: true }],
    ["jpegtran", { progressive: true }],
    ["optipng", { optimizationLevel: 5 }],
  ]
};

// SVG
export const svg = {
  name: resolve(paths.assets, './[name].[ext]')
};

// SVGR
export const svgr = {};

// SVG Sprite
export const svgSprite = {
  runtimeGenerator: resolve(paths.loaders, './svg-sprite-loader/runtime-generator')
};

// TypeScript
export const typescript = {};


/**
 * Плагины
*/

// HTML Webpack Plugin
export const htmlWp = {
  template: resolve(paths.webpack, './static/template.html'),
  title: 'Webpack-starter by CodeQuest'
};