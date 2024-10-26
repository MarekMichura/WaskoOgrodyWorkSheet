import js from '@eslint/js'
import query from '@tanstack/eslint-plugin-query'
import imports from 'eslint-plugin-import'
import react from 'eslint-plugin-react'
import reactCompiler from 'eslint-plugin-react-compiler'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {ignores: ['build', 'node_modules']},
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-Compiler': reactCompiler,
      '@tanstack/query': query,
      import: imports,
      react: react,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...imports.configs.recommended.rules,
      ...query.configs.recommended.rules,

      'react-Compiler/react-compiler': 'error',
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
      'import/no-unresolved': 'off',
      'import/named': 'off',
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
    settings: {
      react: {
        version: 'detect',
      },
    },
  }
)
