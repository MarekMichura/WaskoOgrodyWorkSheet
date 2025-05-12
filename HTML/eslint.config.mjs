import {FlatCompat} from '@eslint/eslintrc'
import query from '@tanstack/eslint-plugin-query'
import imports from 'eslint-plugin-import'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import {dirname} from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      '@tanstack/query': query,
      'react-hooks': reactHooks,
      import: imports,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...imports.configs.recommended.rules,
      ...query.configs.recommended.rules,

      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-req': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {prefer: 'type-imports', fixStyle: 'inline-type-imports', disallowTypeAnnotations: false},
      ],
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
      ],
    },
  },
]

export default eslintConfig
