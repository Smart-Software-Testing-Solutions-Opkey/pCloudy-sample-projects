import os
from datetime import datetime

import pytest
from appium import webdriver
from appium.options.android.uiautomator2.base import UiAutomator2Options
from appium.webdriver.common.appiumby import AppiumBy
from appium.webdriver.webdriver import WebDriver


@pytest.fixture(scope="function")
def driver(device_name):
    username = "<your username here>"
    api_key = "<your api key here>"

    options = UiAutomator2Options()
    options.platform_name = "Android"
    options.platform_version = "14.0.0"
    options.automation_name = "uiautomator2"
    options.app_package = "com.pcloudy.appiumdemo"
    options.app_activity = "com.ba.mobile.LaunchActivity"
    options.new_command_timeout = 600

    # set pcloudy specific capabilities
    pcloudy_options = {
        "pCloudy_Username": username,
        "pCloudy_ApiKey": api_key,
        "pCloudy_DurationInMinutes": 10,
        "pCloudy_DeviceManufacturer": device_name,
        "pCloudy_DeviceVersion": "14.0.0",
        "pCloudy_ApplicationName": "pCloudyAppiumDemo.apk",
        "pCloudy_WildNet": False,
        "pCloudy_EnableVideo": False,
        "pCloudy_EnablePerformanceData": False,
        "pCloudy_EnableDeviceLogs": False,
        "appiumVersion": "2.0.0",
    }
    options.set_capability("pcloudy:options", pcloudy_options)

    driver = webdriver.Remote(
        "https://device.pcloudy.com/appiumcloud/wd/hub", options=options
    )
    yield driver
    driver.quit()


def take_screenshot(driver: WebDriver, folder="screenshots"):
    os.makedirs(folder, exist_ok=True)
    timestamp = datetime.now().strftime("%d-%b-%Y__%I_%M_%Sp")
    path = os.path.join(folder, f"{timestamp}.png")
    driver.save_screenshot(path)


def test_flight_booking_flow(driver: WebDriver):
    by = AppiumBy

    driver.find_element(
        by.XPATH,
        "//android.widget.Button[@resource-id='com.pcloudy.appiumdemo:id/accept']",
    ).click()
    take_screenshot(driver)

    driver.find_element(
        by.XPATH,
        "//android.widget.Button[@resource-id='com.pcloudy.appiumdemo:id/flightButton']",
    ).click()
    take_screenshot(driver)

    driver.find_element(
        by.XPATH,
        "//android.widget.Spinner[@resource-id='com.pcloudy.appiumdemo:id/spinnerfrom']",
    ).click()
    take_screenshot(driver)

    driver.find_element(
        by.XPATH,
        "//android.widget.CheckedTextView[@resource-id='android:id/text1' and @text='Bangalore, India (BLR)']",
    ).click()
    take_screenshot(driver)

    driver.find_element(
        by.XPATH,
        "//android.widget.Spinner[@resource-id='com.pcloudy.appiumdemo:id/spinnerto']",
    ).click()
    take_screenshot(driver)

    driver.find_element(
        by.XPATH,
        "//android.widget.CheckedTextView[@resource-id='android:id/text1' and @text='Pune, India (PNQ)']",
    ).click()
    take_screenshot(driver)

    driver.find_element(
        by.XPATH,
        "//android.widget.RadioButton[@resource-id='com.pcloudy.appiumdemo:id/singleTrip']",
    ).click()
    take_screenshot(driver)

    driver.find_element(
        by.XPATH,
        "//android.widget.TextView[@resource-id='com.pcloudy.appiumdemo:id/txtdepart']",
    ).click()
    take_screenshot(driver)

    driver.find_element(
        by.XPATH,
        "//android.widget.Button[@resource-id='android:id/button1' and @text='OK']",
    ).click()
    take_screenshot(driver)

    driver.find_element(
        by.XPATH,
        "//android.widget.Button[@resource-id='com.pcloudy.appiumdemo:id/searchFlights']",
    ).click()
    take_screenshot(driver)
