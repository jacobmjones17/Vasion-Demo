const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");

const helperFunction = require("./helperFunction.js");
const checkoutPage = require("../Pages/checkout.js");

async function shoppingCartTest() {
    await helperFunction.standardUserLogin()
    const driver = helperFunction.driver

    await driver.findElement(By.id("add-to-cart-sauce-labs-bike-light")).click()

    await driver.findElement(By.id("shopping_cart_container")).click();

    await checkoutPage.navigate()

    await checkoutPage.firstName.sendKeys("Jacob");
    await driver.findElement(By.id("last-name")).sendKeys("Jones");
    await driver.findElement(By.id("postal-code")).sendKeys("28525");
    await driver.findElement(By.id("continue")).click();
    await driver.findElement(By.id("finish")).click();

    const finishedCheckOutUrl = driver.getCurrentUrl().then(function(url) {
        console.log("\x1B[32mYour item(s) are on the way")
        return url
    })

    const checkOutResult = await finishedCheckOutUrl

    assert.strictEqual(checkOutResult, "https://www.saucedemo.com/checkout-complete.html")

    await driver.quit()
}

shoppingCartTest()