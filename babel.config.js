// Used by babel-jest
const presets = [
  // ['@babel/preset-env', {
  //   exclude: [
  //     '@babel/plugin-transform-regenerator'
  //   ]
  // }],
  '@babel/preset-typescript', // must run before preset-env: https://github.com/babel/babel/issues/12066
];
const plugins = [
  './packages/@okta/babel-plugin-handlebars-inline-precompile',
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-class-properties',
  ['module-resolver', {
    cwd: 'packagejson',
    extensions: ['.js', '.ts'],
    root: ['./src'],
    alias: {
      // copied to dist by grunt copy:lib-to-dist
      'okta': './src/lib/okta.js',
      'nls': './src/nls',
      'duo': './src/lib/duo',
      'typingdna': './src/lib/typingdna',
      'qtip': './src/lib/jquery.qtip.min.js'
    }
  }]

];

module.exports = { presets, plugins };