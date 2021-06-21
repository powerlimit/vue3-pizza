module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'arrow-body-style': 'off',
        '@typescript-eslint/no-unused-vars': 'off'
      }
    },
    {
      files: ['*.ts'],
      rules: {
        'import/prefer-default-export': 'off',
        'no-shadow': 'off',
        'no-plusplus': 'off',
        'import/extensions': 'off',
      }
    }
  ]
};
