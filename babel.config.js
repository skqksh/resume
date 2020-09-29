module.exports = function (api) {
  const presets = [
    '@babel/preset-typescript',
    'babel-preset-nano-react-app',
  ]

  const moduleResolver = [
    'module-resolver',
    {
      root: '.',
      alias: {
        '@components': './src/components',
      },
    },
  ]

  const plugins = [moduleResolver]

  const envDevelopment = {
    presets,
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/transform-react-jsx-source',
      moduleResolver,
    ],
  }

  if (api.env(['development', 'test'])) {
    return envDevelopment
  }

  return {
    presets,
    plugins,
  }
}
