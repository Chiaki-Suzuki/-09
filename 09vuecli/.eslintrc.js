module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'google',
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    'vue/multi-word-component-names': 'off',
    'multi-word-component-names': 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'semi': 'off',
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'arrow-parens': 'off',
    'vue/no-reserved-component-names': 'off',
    'no-invalid-this': 'off',
    'no-multiple-empty-lines': 'off',
    'max-len': 'off'
  },
};
