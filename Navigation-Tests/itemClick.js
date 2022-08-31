const {Builder, By, Key} = require ("selenium-webdriver");
const assert = require ("assert");

async function firstLogin() {
    const driver = await new Builder().forBrowser("chrome").build()

    // open Saucedemo.com
    await driver.get("https://www.saucedemo.com/inventory.html");
    
    userName.clear();
    
    await driver.findElement(By.className("inventory_item")).click()

    // Input Username
    
    const promise = driver.getCurrentUrl().then(function(url){
        console.log("\x1B[32mCongratulations, you officially logged in!")
        return url
    })
 
     const result = await promise
 
     assert.strictEqual(result, "https://www.saucedemo.com/inventory-item.html?id=4")
 
     await driver.quit()
}

firstLogin();