const {Builder, By, Key, WebElement} = require ("selenium-webdriver");
const assert = require ("assert");
const chai = require ("chai");
const { Assertion } = require("chai");
const expect = require ("chai").expect;

async function firstLogin() {
    const driver = await new Builder().forBrowser("chrome").build()
    const userName = driver.findElement(By.id("user-name"));
    const password = driver.findElement(By.id("password"));

    // open Saucedemo.com
    await driver.get("https://www.saucedemo.com/");
    
    userName.clear();
    await userName.sendKeys("standard_user")
    
    await password.sendKeys("secret_sauce", Key.RETURN)

    // Input Username
    
    const promise = driver.getCurrentUrl().then(function(url){
        console.log("Congratulations, you officially logged in!")
        return url
    })
 
     const result = await promise
 
     assert.strictEqual(result, "https://www.saucedemo.com/inventory.html")
 
     await driver.quit()
}

firstLogin();