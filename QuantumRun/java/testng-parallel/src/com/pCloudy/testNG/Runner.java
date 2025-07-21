package com.pCloudy.testNG;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.service.local.AppiumDriverLocalService;
import org.testng.annotations.Parameters;


public class Runner {

	AppiumDriverLocalService service;
	AppiumDriver driver;
	String folder_name;
	DateFormat df;

	@BeforeTest
	public void setUpSuite() throws Exception {

	}

	@Parameters({ "deviceName","deviceVersion" })
	
	@BeforeMethod
	public void prepareTest(String deviceName,String deviceVersion) throws IOException, InterruptedException {

		String username = "Enter your email-id";
		String apiKey = "Enter your API Key";

		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability("appium:newCommandTimeout", 600);
		capabilities.setCapability("appium:launchTimeout", 90000);
		capabilities.setCapability("appium:platformName", "Android");
		capabilities.setCapability("appium:automationName", "uiautomator2");
		capabilities.setCapability("appium:appPackage", "com.pcloudy.appiumdemo");
		capabilities.setCapability("appium:appActivity", "com.ba.mobile.LaunchActivity");
		capabilities.setCapability("appium:uiautomator2ServerLaunchTimeout", 200000);
		capabilities.setCapability("appium:uiautomator2ServerInstallTimeout", 150000);
		
		HashMap<String, Object> pcloudyOptions = new HashMap<String, Object>();
		pcloudyOptions.put("pCloudy_Username", username);
		pcloudyOptions.put("pCloudy_ApiKey", apiKey);
		pcloudyOptions.put("pCloudy_DurationInMinutes", 10);
		pcloudyOptions.put("pCloudy_DeviceManufacturer", deviceName);
		pcloudyOptions.put("pCloudy_DeviceVersion", deviceVersion);
		pcloudyOptions.put("pCloudy_ApplicationName", "pCloudyAppiumDemo.apk");
		pcloudyOptions.put("pCloudy_WildNet", false);
		pcloudyOptions.put("pCloudy_EnableVideo", true);
		pcloudyOptions.put("pCloudy_EnablePerformanceData", false);
		pcloudyOptions.put("pCloudy_EnableDeviceLogs", false);
		pcloudyOptions.put("appiumVersion", "2.0.0");
		capabilities.setCapability("pcloudy:options", pcloudyOptions);
		
		driver = new AndroidDriver(new URL("https://ind-west.pcloudy.com/appiumcloud/wd/hub"), capabilities);
		
		
	}

	
	@Parameters({ "deviceName" })
	@Test
	public void Test(String deviceName) throws IOException, InterruptedException {
		
        waitForVisibility(By.id("com.pcloudy.appiumdemo:id/accept"), driver).click();
	    captureScreenShots();

	    waitForVisibility(By.id("com.pcloudy.appiumdemo:id/flightButton"), driver).click();
	    captureScreenShots();

	    waitForVisibility(By.id("com.pcloudy.appiumdemo:id/spinnerfrom"), driver).click();
	    captureScreenShots();

	    waitForVisibility(By.xpath("//android.widget.CheckedTextView[@text='Bangalore, India (BLR)']"), driver).click();
	    captureScreenShots();

	    waitForVisibility(By.id("com.pcloudy.appiumdemo:id/spinnerto"), driver).click();
	    captureScreenShots();

	    waitForVisibility(By.xpath("//android.widget.CheckedTextView[@text='Pune, India (PNQ)']"), driver).click();
	    captureScreenShots();

	    waitForVisibility(By.id("com.pcloudy.appiumdemo:id/singleTrip"), driver).click();

	    waitForVisibility(By.id("com.pcloudy.appiumdemo:id/txtdepart"), driver).click();
	    captureScreenShots();

	    waitForVisibility(By.id("android:id/button1"), driver).click(); // OK button
	    captureScreenShots();

	    waitForVisibility(By.id("com.pcloudy.appiumdemo:id/searchFlights"), driver).click();
	    captureScreenShots();
		
	}

	public static WebElement waitForVisibility(By locator, AppiumDriver<?> driver) {
	    WebDriverWait wait = new WebDriverWait(driver, 10); // 
	    return wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
	}

	@Parameters({ "deviceName" })
	@AfterMethod
	public void endTest(String deviceName ) throws IOException {
	
	    driver.quit();
		
		
	}

	// Capture screenshot
	public void captureScreenShots() throws IOException {
		folder_name = "screenshot";
		File f = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		// Date format for screenshot file name
		df = new SimpleDateFormat("dd-MMM-yyyy__hh_mm_ssaa");
		// create dir with given folder name
		new File(folder_name).mkdir();
		// Setting file name
		String file_name = df.format(new Date()) + ".png";
		// copy screenshot file into screenshot folder.
		//FileUtils.copyFile(f, new File(folder_name + "/" + file_name));
	}
}