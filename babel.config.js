module.exports = (api) => {
  api.cache.never();

  return {
    presets: [
      '@babel/env',
      '@babel/react',
      '@babel/typescript'
    ],

    plugins: [

    ]
  }
}