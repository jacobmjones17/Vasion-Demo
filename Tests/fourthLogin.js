const {Builder, By, Key} = require ("selenium-webdriver");
const assert = require ("assert");

async function fourthLogin() {
    const driver = await new Builder().forBrowser("chrome").build()
    const userName = driver.findElement(By.id("user-name"));
    const password = driver.findElement(By.id("password"));

    // open Saucedemo.com
    await driver.get("https://www.saucedemo.com/");
    
    // enter username & password
    userName.clear();
    await userName.sendKeys("performance_glitch_user")
    
    await password.sendKeys("secret_sauce", Key.RETURN)

    // get current URL
    const promise = driver.getCurrentUrl().then(function(url){
        console.warn("\x1B[32mRan Successfully. \x1B[31mTook Longer than expected!")
        return url
    })
 
     const result = await promise
 
    // Expect current URL to be inventory page
    assert.strictEqual(result, "https://www.saucedemo.com/inventory.html")
 
    await driver.quit()
}

fourthLogin();