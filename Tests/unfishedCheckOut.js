const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");

async function unfinishedCheckOut() {

    // First Login Test
    const driver = await new Builder().forBrowser("chrome").build()
    const userName = driver.findElement(By.id("user-name"));
    const password = driver.findElement(By.id("password"));



    await driver.get("https://www.saucedemo.com/");


    userName.clear();
    await userName.sendKeys("standard_user")
    await password.sendKeys("secret_sauce", Key.RETURN)


    const promise = driver.getCurrentUrl().then(function (url) {
        console.log("\x1B[32mCongratulations, you officially logged in!")
        return url
    })
    const result = await promise

    assert.strictEqual(result, "https://www.saucedemo.com/inventory.html")


    // Navigation to item test
    await driver.findElement(By.id("item_4_img_link")).click();


    const currentUrl = driver.getCurrentUrl().then(function (url) {
        console.log("\x1B[32mThis is the item you clicked on!")
        return url
    })

    const pageResult = await currentUrl

    assert.strictEqual(pageResult, "https://www.saucedemo.com/inventory-item.html?id=4")

    await driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();


    // Navigate Back and purchase the item

    await driver.findElement(By.id("shopping_cart_container")).click();

    await driver.findElement(By.id("checkout")).click();

    await driver.findElement(By.id("first-name")).sendKeys("Jacob");
    await driver.findElement(By.id("last-name")).sendKeys("Jones");
    await driver.findElement(By.id("continue")).click();
    await driver.findElement(By.id("finish")).click();


    // Exit Page
    await driver.quit()
}

unfinishedCheckOut()