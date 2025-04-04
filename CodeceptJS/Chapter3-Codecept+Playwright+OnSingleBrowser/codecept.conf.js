const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
const { playwrightConfig } = require("./config/pcloudy.config.js");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
 tests: './tests/*.test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: true,
	  chromium: {
		browserWSEndpoint: playwrightConfig.bookSession(),
		cdpConnection: false // default is false
	  }

    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'Codecept-Playwright'
}