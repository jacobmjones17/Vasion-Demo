const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
const driver = new Builder().forBrowser("chrome").build()

async function standardUserLogin () {
    
    const userName = driver.findElement(By.id("user-name"));
    const password = driver.findElement(By.id("password"));

    driver.manage().window().maximize()

    await driver.get("https://www.saucedemo.com/");

    userName.clear();
    password.clear();

    await userName.sendKeys("standard_user")
    await password.sendKeys("secret_sauce", Key.RETURN)
}

module.exports = { standardUserLogin, driver:driver }