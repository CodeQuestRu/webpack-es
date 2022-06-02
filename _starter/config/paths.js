import { resolve } from 'path';
import appRoot from 'app-root-path';


// Корневая директория
export const root = appRoot.toString();

// Путь до исходной директории
export const source = resolve(root, './src');

// Файлы
export const assets = resolve(source, './assets');

// Конфиги
export const config = resolve(source, './config');

// Путь до конечной директории
export const build = resolve(root, './dist');

// Путь до стартера
export const starter = resolve(root, './_starter');

// Путь до webpack
export const webpack = resolve(starter, './webpack');

// Лоадеры
export const loaders = resolve(webpack, './loaders');
