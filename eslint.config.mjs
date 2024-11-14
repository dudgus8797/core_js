import globals from 'globals';
import pluginJs from '@eslint/js';
const type = {
  isObject: true,
  isArray: true,
};
export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...type,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
