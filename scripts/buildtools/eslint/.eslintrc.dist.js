module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'import',
    'compat'
  ],
  extends: [
    'plugin:import/recommended',
    'plugin:compat/recommended',
  ],
  settings: {
    polyfills: [
      'Promise' // Assume Promise is polyfilled for IE11
    ]
  },
  overrides: [
    {
      // type-only exports
      files: [
        '**/*/types/index.js'
      ],
      rules: {
        'import/export': 0
      }
    },
    {
      // webauthn - not supported on IE11
      files: [
        '**/*/VerifyWebauthnController.js',
        '**/*/webauthn.js',
        '**/*/ChallengeWebauthnView.js'
      ],
      settings: {
        polyfills: [
          'AbortController',
          'navigator.credentials'
        ]
      }
    }
  ]
};
