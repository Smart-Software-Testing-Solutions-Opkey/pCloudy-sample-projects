const{ appiumConfig } = require("../config/pcloudy.config.js");

const platform = appiumConfig.getPlatform();

Feature('Test-Case');

Scenario('Book a one-way flight from Bangalore to Pune',  ({ I }) => {

	if (platform !== 'android') return;

	const acceptButton = '//android.widget.Button[@resource-id="com.pcloudy.appiumdemo:id/accept"]';
	const flightButton = '//android.widget.Button[@resource-id="com.pcloudy.appiumdemo:id/flightButton"]';
	const fromButton = '//android.widget.Spinner[@resource-id="com.pcloudy.appiumdemo:id/spinnerfrom"]';
	const selectBanglore = '//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Bangalore, India (BLR)"]';
	const toButton = '//android.widget.Spinner[@resource-id="com.pcloudy.appiumdemo:id/spinnerto"]';
	const selectPune = '//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Pune, India (PNQ)"]';
	const oneWayTrip = '//android.widget.RadioButton[@resource-id="com.pcloudy.appiumdemo:id/singleTrip"]';
	const departureDate = '//android.widget.TextView[@resource-id="com.pcloudy.appiumdemo:id/txtdepart"]';
	const oKButton = '//android.widget.Button[@resource-id="android:id/button1" and @text="OK"]';
	const searchFlights = '//android.widget.Button[@resource-id="com.pcloudy.appiumdemo:id/searchFlights"]';

  I.waitForElement(acceptButton, 20);
  I.tap(acceptButton);

  I.waitForElement(flightButton, 20);
  I.tap(flightButton);

  // Select From Location (Bangalore)
  I.waitForElement(fromButton, 20);
  I.tap(fromButton);
  I.waitForElement(selectBanglore, 20);
  I.tap(selectBanglore);
  I.saveScreenshot('Bangalore_selected.png');

  // Select To Location (Pune)
  I.waitForElement(toButton, 20);
  I.tap(toButton);
  I.waitForElement(selectPune, 20);
  I.tap(selectPune);
  I.saveScreenshot('Pune_selected.png');

  // Select One-Way Trip
  I.waitForElement(oneWayTrip, 20);
  I.tap(oneWayTrip);

  // Select Departure Date
  I.waitForElement(departureDate, 20);
  I.tap(departureDate);
  I.waitForElement(oKButton, 20);
  I.tap(oKButton);

  // Click Search Flights
  I.waitForElement(searchFlights, 20);
  I.tap(searchFlights);
}).tag('android');


Scenario('Login page demo',  ({ I }) => {

	if (platform !== 'ios') return;

	const username = "//XCUIElementTypeApplication[1]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeTextField[1]";
	const password = "//XCUIElementTypeApplication[1]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeSecureTextField[1]";
	const login = "//XCUIElementTypeApplication[1]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeButton[1]";

  I.waitForElement(username, 20);
  I.fillField(username,"test@testname.com");

  I.waitForElement(password, 20);
  I.fillField(password,"testmunk");

  I.waitForElement(login, 20);
  I.tap(login);
  I.saveScreenshot("LoggedIn.png");
}).tag('ios');;