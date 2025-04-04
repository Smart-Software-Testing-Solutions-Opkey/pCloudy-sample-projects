const appiumConfig = {

	 android () {
		return {
			protocol: 'https',
			host: "device.pcloudy.com",
			port: 443,
			path: '/appiumcloud/wd/hub',
			platform: 'Android',
			desiredCapabilities: {
			  "pcloudy:options": {
				pCloudy_Username: 'Enter-Email',
				pCloudy_ApiKey: 'Enter-API-Key',
				pCloudy_DeviceFullName: "GOOGLE_Pixel9ProXL_Android_14.0.0_7e17b",
				pCloudy_DurationInMinutes: 50,
				appiumVersion: '2.0.0'
			  },
			  "appium:newCommandTimeout": 600,
			  "appium:launchTimeout": 90000,
			  "appium:automationName": "UiAutomator2",
			  "appium:browserName": "chrome",
			}
		  };
	},

	ios () {
		return {
			protocol: 'https',
			host: "device.pcloudy.com",
			port: 443,
			path: '/appiumcloud/wd/hub',
			platform: 'ios',
			desiredCapabilities: {
			  "pcloudy:options": {
				pCloudy_Username: 'Enter-Email',
				pCloudy_ApiKey: 'Enter-API-Key',
				pCloudy_DeviceFullName: 'APPLE_iPhone11Pro_iOS_17.5.1_45645',
				pCloudy_DurationInMinutes: 50,
				appiumVersion: '2.0.0'
			  },
			  "appium:newCommandTimeout": 600,
			  "appium:launchTimeout": 90000,
			  "appium:automationName": "XCUITest",
			  "appium:browserName": "safari",
			}
		  };
	},
	createDriver(platform) {
		const drivers = {
		  ios: this.ios.bind(this),
		  android: this.android.bind(this),
		};
	  
		const driverFn = drivers[platform];
		if (!driverFn) {
		  throw new Error(`Unknown platform`);
		}
	  
		return driverFn();
	  },
	  getPlatform() {
		return process.env.PLATFORM || 'android';
	  }
} 

module.exports= {appiumConfig}; 