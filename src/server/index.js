/**
 * Using ESM : A fast, production ready, zero-dependency ES module loader for Node 6+!
 * @see https://www.npmjs.com/package/esm
 */

// Set options as a parameter, environment variable, or rc file.
require = require("esm")(module/*, options*/)
module.exports = require("./main.js")