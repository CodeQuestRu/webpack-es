// Динамический импорт стилей для Ant Design
export const importAntd = [
  'import',
  {
    libraryName: 'antd',
    style: true,
  },
];


// Динамический импорт Lodash
export const importLodash = [
  'import',
  {
    libraryName: 'lodash',
    libraryDirectory: '',
    camel2DashComponentName: false,
  },
  'lodash',
];


// Заменяет Enum на Object
export const constEnum = [
  'const-enum',
  {
    transform: 'constObject',
  },
];


// Сокращения для путей в импортах
export const moduleResolver = [
  'module-resolver',
  {
    root: ['./src'],
    alias: {
      '@assets': './src/assets',
      '@icons': './src/assets/icons',
      '@uikit': './src/components',
      '@config': './src/config',
    },
  },
];
