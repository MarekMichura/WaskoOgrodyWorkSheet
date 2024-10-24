import pluginJs from '@eslint/js'
import pluginQuery from '@tanstack/eslint-plugin-query'
import importPlugin from 'eslint-plugin-import'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const res = [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    ...pluginQuery.recommended,
    languageOptions: {globals: globals.browser},
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/no-string-refs': 'off',
    },
  },
  {
    ...importPlugin.flatConfigs.recommended,
    rules: {
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '/**',
              group: 'internal',
            },
            {
              pattern: './css',
              group: 'index',
            },
          ],
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
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
