Feature('LogIn');

Scenario('Login page demo', async ({ I }) => {
	const aboutUs = "//a[contains(text(), 'About Us')]";
	const getText = "//div[contains(@class, 'about-us-text-text')]";

	I.resizeWindow(1920, 1080); // or your desired resolution


	I.amOnPage('https://www.pcloudy.com');

	I.waitForElement(aboutUs, 20);
	I.click(aboutUs);

	I.waitForElement(getText, 20);
	const text = await I.grabTextFrom(getText);
	console.log(text);
});