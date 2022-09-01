const {Builder, By, Key} = require ("selenium-webdriver");
const assert = require ("assert");

async function thirdLogin() {
    const driver = await new Builder().forBrowser("chrome").build()
    const userName = driver.findElement(By.id("user-name"));
    const password = driver.findElement(By.id("password"));

    // open Saucedemo.com
    await driver.get("https://www.saucedemo.com/");
    
    // enter username & password
    userName.clear();
    await userName.sendKeys("problem_user")
    
    await password.sendKeys("secret_sauce", Key.RETURN)

    

}