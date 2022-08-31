const {Builder, By, Key} = require ("selenium-webdriver");
const assert = require ("assert");

async function firstLogin() {
    const driver = await new Builder().forBrowser("chrome").build()
    const userName = driver.findElement(By.id("user-name"));
    const password = driver.findElement(By.id("password"));

    
    // open Saucedemo.com
    await driver.get("https://www.saucedemo.com/");
    
    
    
    // Input Username & Password
    userName.clear();
    await userName.sendKeys("standard_user")
    await password.sendKeys("secret_sauce", Key.RETURN)

    
    // get current URL
    const promise = driver.getCurrentUrl().then(function(url){
        console.log("\x1B[32mCongratulations, you officially logged in!")
        return url
    })
    const result = await promise
    
    
    // Actual vs. Expectation URL for Login
    assert.strictEqual(result, "https://www.saucedemo.com/inventory.html")

    // Click on first item
    await driver.findElement(By.id("item_4_img_link")).click();

    //Get new current URL
    const currentUrl = driver.getCurrentUrl().then(function(url) {
            console.log("\x1B[32mThis is the item you clicked on!")
            return url
        })
 
    const pageResult = await currentUrl
 

    //Actual vs. Expectation URL for item
    assert.strictEqual(pageResult, "https://www.saucedemo.com/inventory-item.html?id=4")
 
    await driver.quit()
}

firstLogin()