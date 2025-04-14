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
				pCloudy_DeviceFullName: 'GOOGLE_Pixel2XL_Android_11.0.0_64fe3',
				pCloudy_ApplicationName: 'pCloudyAppiumDemo.apk',
				pCloudy_DurationInMinutes: 50,
				appiumVersion: '2.0.0'
			  },
			  "appium:newCommandTimeout": 600,
			  "appium:launchTimeout": 90000,
			  "appium:automationName": "UiAutomator2",
			  "appium:appPackage": "com.pcloudy.appiumdemo",
			  "appium:appActivity": "com.ba.mobile.LaunchActivity"
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
				pCloudy_ApplicationName: 'TestmunkDemo_Resigned1736490871.ipa',
				pCloudy_DurationInMinutes: 50,
				appiumVersion: '2.0.0'
			  },
			  "appium:newCommandTimeout": 600,
			  "appium:launchTimeout": 90000,
			  "appium:automationName": "XCUITest",
			  "appium:bundleId": "com.pcloudy.TestmunkDemo"
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