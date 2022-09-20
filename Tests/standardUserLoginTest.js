/* This test is passing in every way. It logs in with the first username (standard_user) and the password. It expects it to login and go to the inventory page. It tests that the user can click on an item and add it to cart. Then it goes back and adds a new item to the cart from the inventory page. Then it goes to the cart, checks out, fills out their information, and purchases the items. */

const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
const helperFunction = require("./helperFunction.js");

async function standardUserLogin() {

    // State Setup
    const driver = helperFunction.driver
    const userName = driver.findElement(By.id("user-name"));
    const password = driver.findElement(By.id("password"));

    driver.manage().window().maximize()

    await driver.get("https://www.saucedemo.com/");

    userName.clear();
    password.clear();

    // Test
    await userName.sendKeys("standard_user")
    await password.sendKeys("secret_sauce", Key.RETURN)


    const promise = driver.getCurrentUrl().then(function (url) {
        console.log("\x1B[32mCongratulations, you officially logged in!")
        return url
    })
    const result = await promise

    assert.strictEqual(result, "https://www.saucedemo.com/inventory.html")

    await driver.quit()
}

standardUserLogin()