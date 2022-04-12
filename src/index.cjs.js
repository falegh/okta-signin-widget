// This is the primary export for the CommonJS module.
// DO NOT CONVERT TO TYPESCRIPT - for backward compatibility we need to use `module.exports` not `export default`

const OktaSignIn = require('./widget/OktaSignIn').OktaSignIn;

module.exports = OktaSignIn;
