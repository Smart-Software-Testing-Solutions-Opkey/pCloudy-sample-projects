const seleniumConfig = {

	bookSession () {
	   return {
		   protocol: 'https',
		   url: 'https://device.pcloudy.com',
		   path: '/seleniumcloud/wd/hub',
		   browser: 'chrome',
		   browserName: 'chrome',
		   host: 'browser.device.pcloudy.com',
		   port: 443,
		   desiredCapabilities: {
			   "pcloudy:options": {
				   userName:"Enter-Email",
				   accessKey:"Enter-Api-Key", 
				   os:"Mac",
				   osVersion:"Monterey",
				   browserVersion:"125",
				   local:false,
				   seleniumVersion:"3.141.59"
			   }
		   }
	   }
	},
} 

module.exports= {seleniumConfig}; 