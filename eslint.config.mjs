import js from '@eslint/js';
import next from 'eslint-config-next';

export default [
  js.configs.recommended,
  ...next.configs,
  {
    rules: {
      // ✅ Fix "React must be in scope"
      'react/react-in-jsx-scope': 'off',

      // ✅ Optional: Disable PropTypes validation if not using PropTypes
      'react/prop-types': 'off',
    },
  },
];
