import js from '@eslint/js'
import parser from '@typescript-eslint/parser'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
import {FlatCompat} from '@eslint/eslintrc'

import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import promise from 'eslint-plugin-promise'
import security from 'eslint-plugin-security'
import unusedImports from 'eslint-plugin-unused-imports'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const compat = new FlatCompat({baseDirectory: __dirname})

const eslintConfig = [
  js.configs.recommended,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {jsx: true},
        project: './tsconfig.json',
      },
    },
    plugins: {
      react,
      // '@tanstack/query': query,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      promise,
      security,
      'unused-imports': unusedImports,
    },
    rules: {
      // ts
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
          disallowTypeAnnotations: false,
        },
      ],

      // React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // locale imports
      'no-restricted-imports': [
        'error',
        {
          name: 'next/link',
          message: 'please use custom import from @/locale/navigation',
          importNames: ['default', 'redirect'],
        },
        {
          name: 'next/navigation',
          message: 'please use custom import from @/locale/navigation',
          importNames: ['redirect', 'usePathname', 'useRouter'],
        },
        {
          name: 'react-redux',
          message: 'please use custom import from @/components/redux',
          importNames: ['useDispatch', 'useSelector'],
        },
      ],

      // JSX A11y
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/alt-text': 'warn',

      // Imports
      'import/order': [
        'warn',
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
      'import/no-unresolved': 'error',

      // Unused imports
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // General
      'no-console': 'warn',
      'no-debugger': 'error',

      // Promise
      'promise/no-return-wrap': 'warn',
      'promise/param-names': 'warn',

      // Security
      'security/detect-non-literal-fs-filename': 'warn',
    },
  },
]

export default eslintConfig
