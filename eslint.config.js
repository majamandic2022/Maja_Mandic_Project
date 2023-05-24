import typescriptParser from '@typescript-eslint/parser';
import nimbusTechConfig from 'eslint-config-nimbus-tech';

export default [
  ...nimbusTechConfig,
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: { modules: true },
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
    },
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['**/*.config.ts', 'node_modules'],
  },
];
