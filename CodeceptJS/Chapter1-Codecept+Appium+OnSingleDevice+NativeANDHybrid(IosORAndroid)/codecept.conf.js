const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
const { appiumConfig } = require("./config/pcloudy.config.js");
// Turn on headless mode when running with HEADLESS=true environment variable
setHeadlessWhen(process.env.HEADLESS);
const platform = appiumConfig.getPlatform();


// Enable all common plugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  output: './output',
  helpers: {
    Appium: appiumConfig.createDriver(platform),
  },
  tests: './tests/*.test.js',
  include: {
    I: './steps_file.js'
  },
  name: 'Codecept-Appium'
};
