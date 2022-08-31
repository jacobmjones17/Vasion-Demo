const {Builder, By, Key} = require ("selenium-webdriver");
const assert = require ("assert");




async function secondLogin() {
    const driver = await new Builder().forBrowser("chrome").build()
    const userName = driver.findElement(By.id("user-name"));
    const password = driver.findElement(By.id("password"));

    // open Saucedemo.com
    await driver.get("https://www.saucedemo.com/");
    
    userName.clear();
    await userName.sendKeys("locked_out_user")
    
    await password.sendKeys("secret_sauce", Key.RETURN)

    // Input Username
    
    const promise = driver.getCurrentUrl().then(function(url){
        console.error("You're account has been blocked! Try new credentials")
        return url
    })
 
     const result = await promise
 
     assert.strictEqual(result, "https://www.saucedemo.com/inventory.html")
 
     await driver.quit()
}

secondLogin();