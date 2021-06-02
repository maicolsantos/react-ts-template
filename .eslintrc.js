module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [ '.js', '.jsx', '.ts', '.tsx', '.json' ],
      },
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
  },
  rules: {
    'no-console': [ 1, { allow: [ 'warn', 'error' ] }],
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/button-has-type': 0,
    'comma-dangle': [ 'error', 'always-multiline' ],
    'no-use-before-define': 'off',
    indent: [ 'error', 2, { SwitchCase: 1 }],
    'no-empty-function': 'error',
    'prefer-const': 'error',
    'no-plusplus': [ 'error', { allowForLoopAfterthoughts: true }],
    'newline-before-return': 'error',
    'max-len': [ 'error', { code: 120, ignorePattern: '^import\\W.*' }],
    'no-multiple-empty-lines': [ 'error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'eol-last': [ 'error', 'always' ],
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-cycle': [ 2, { maxDepth: 1 }],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: [ 'arrowFunctions' ] },
    ],
    '@typescript-eslint/indent': [ 'warn', 2 ],
    '@typescript-eslint/no-var-requires': 'off',
    semi: [ 'error', 'never' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-curly-newline': [ 'error', {
      multiline: true,
      consistent: true,
      minProperties: 4,
    }],
    'array-bracket-spacing': [ 'error', 'always', {
      objectsInArrays: false,
      arraysInArrays: false,
    }],
    'no-param-reassign': [ 'error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state',
        'acc',
        'e',
      ],
    }],
  },
}
