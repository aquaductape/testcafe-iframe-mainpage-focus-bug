const os = require("os");

module.exports = {
  skipJsErrors: false,
  hostname: os.hostname(),
  browsers: ["chrome"],
  src: ["./test-focus.js"],
};
