const { seleniumConfig } = require("./config/pcloudy.config.js");

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: seleniumConfig.bookSession(),
  },
  tests: './tests/*.test.js',
  include: {
    I: './steps_file.js'
  },
  name: 'Codecept-Selenium'
}