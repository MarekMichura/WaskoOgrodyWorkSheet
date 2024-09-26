import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import importPlugin from 'eslint-plugin-import'

const res = [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    languageOptions: {globals: globals.browser},
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    ...importPlugin.flatConfigs.recommended,
    rules: {
      'import/order': [
        'error',
        {
          'newlines-between': 'never',
          pathGroups: [
            {
              pattern: '/**',
              group: 'internal',
            },
          ],
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
        },
      ],
    },
  },
  {
    files: ['webpack.config.js'],
    languageOptions: {globals: globals.node},
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'no-undef': 'off',
    },
  },
]

export default res
