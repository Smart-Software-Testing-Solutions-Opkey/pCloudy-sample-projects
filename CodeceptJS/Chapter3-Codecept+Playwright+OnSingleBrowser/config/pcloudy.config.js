const playwrightConfig = {

	bookSession(){
		const capabilities = {
			'browserName' : 'chrome',
			'pcloudy:options':
			  {
					userName:"Enter-Email",
					accessKey:"Enter-API-Key",
					os : "Windows",
					osVersion : "11" ,
					browserVersion:"128",
					local:false
			  }

			  
		}
		return `wss://browser.device.pcloudy.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`;
		
	}
} 

module.exports= {playwrightConfig}; 