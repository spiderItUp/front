module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: 'babel-eslint',
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    quotes: ['warn', 'single'],
    semi: ['warn', 'never'],
    indent: ['warn', 2],
    'no-multi-spaces': ['warn'],
    'default-param-last': ['off'],
    'no-unused-vars': ['warn'],
    'react/jsx-pascal-case': ['off'],
    camelcase: ['off']

  }
}
