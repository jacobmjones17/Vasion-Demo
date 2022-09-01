/* This test passes. It passes in the sense that it will log the user in. However, its expected that the login will be immediate, but rather it takes 5 seconds. */

const {Builder, By, Key} = require ("selenium-webdriver");
const assert = require ("assert");

async function fourthLogin() {

    // Fourth Username Login Test - Expect to pass but takes way too long!
    const driver = await new Builder().forBrowser("chrome").build()
    const userName = driver.findElement(By.id("user-name"));
    const password = driver.findElement(By.id("password"));


    await driver.get("https://www.saucedemo.com/");
    
    userName.clear();
    password.clear();

    await userName.sendKeys("performance_glitch_user")
    await password.sendKeys("secret_sauce", Key.RETURN)

    const promise = driver.getCurrentUrl().then(function(url){
        console.warn("\x1B[32mRan Successfully. \x1B[31mTook Longer than expected!")
        return url
    })
 
     const result = await promise
 
    assert.strictEqual(result, "https://www.saucedemo.com/inventory.html")
 
    await driver.quit()
}

fourthLogin();