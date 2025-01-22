import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      semi: 'error',
      indent: ['error', 2],

      // React 관련 규칙
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReact.configs.flat['jsx-runtime'].rules,
      ...tseslint.configs.recommended.rules,
    },
  },
);
