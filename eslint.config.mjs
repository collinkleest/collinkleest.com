import eslint from '@eslint/js'
import eslintReact from 'eslint-plugin-react'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'

const eslintConfig = defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'postcss.config.js'
  ])
])

export default eslintConfig
