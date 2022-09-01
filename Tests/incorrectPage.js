const {Builder, By, Key} = require ("selenium-webdriver");
const assert = require ("assert");

async function incorrectPage() {
    const driver = await new Builder().forBrowser("chrome").build()
    const userName = driver.findElement(By.id("user-name"));
    const password = driver.findElement(By.id("password"));

    // open Saucedemo.com
    await driver.get("https://www.saucedemo.com/");
    
    // enter username & password
    userName.clear();
    await userName.sendKeys("problem_user")
    
    await password.sendKeys("secret_sauce", Key.RETURN)

    await driver.findElement(By.id("item_4_img_link")).click()

    const currentUrl = driver.getCurrentUrl().then(function (url) {
        console.log("\x1B[31mWent to the wrong item!")
        return url
    })

    const pageResult = await currentUrl

    assert.strictEqual(pageResult, "https://www.saucedemo.com/inventory-item.html?id=4")

    driver.quit();

}

inccorectPage();