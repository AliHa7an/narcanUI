module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    extends: [
      'airbnb',
      'eslint:recommended',
      'plugin:prettier/recommended',
      'plugin:react/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:jsx-a11y/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    plugins: ['react', 'react-hooks'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'no-unused-vars': ['warn'],
      'prettier/prettier': ['warn', { singleQuote: true }],
      'react/jsx-filename-extension': [
        1,
        { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      ], // Include TypeScript extensions
      'react/jsx-uses-react': 1,
      'react/jsx-uses-vars': 1,
      'react/react-in-jsx-scope': 1,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/display-name': 0,
      'react/prop-types': [0, { ignore: ['children'] }],
      'jsx-a11y/anchor-is-valid': 0,
      'react/function-component-definition': 'off',
      'react/no-array-index-key': 'off',
      'import/extensions': 'off',
      'react/button-has-type': 'off',
      'import/no-unresolved': 'off',
      'react/jsx-runtime': 'off',
      'import/no-extraneous-dependencies': 'off',
      'react/jsx-props-no-spreading': 'off',
      'jsx-a11y/interactive-supports-focus': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'no-unused-vars': 'off',
      'react/require-default-props': 'off'
    },
  };
  