module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  plugins: [
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    'prettier/prettier': ['error', {
      tabWidth: 2,
      useTabs: false,
      semi: false,
      singleQuote: true,
      trailingComma: 'all',
      arrowParens: 'always'
    }],

    'react/no-unsafe': 'warn',
    
    'no-console': [
      'warn',
      {
        allow: [
          'error',
          'warn'
        ]
      }
    ],

    // This project only --
    'react/display-name': 'off',
    'react/prop-types': 'off',
  },
}
