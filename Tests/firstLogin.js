/* This test is passing in every way. It logs in with the first username (standard_user) and the password. It expects it to login and go to the inventory page. It tests that the user can click on an item and add it to cart. Then it goes back and adds a new item to the cart from the inventory page. Then it goes to the cart, checksout, fills out their information, and purchases the items. */

const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");

async function firstLogin() {

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


    // Navigate Back, add new item and purchase the items
    await driver.navigate().back();

    await driver.findElement(By.id("add-to-cart-sauce-labs-bike-light")).click()

    await driver.findElement(By.id("shopping_cart_container")).click();

    await driver.findElement(By.id("checkout")).click();

    await driver.findElement(By.id("first-name")).sendKeys("Jacob");
    await driver.findElement(By.id("last-name")).sendKeys("Jones");
    await driver.findElement(By.id("postal-code")).sendKeys("28525");
    await driver.findElement(By.id("continue")).click();
    await driver.findElement(By.id("finish")).click();


    await driver.quit()
}

firstLogin()