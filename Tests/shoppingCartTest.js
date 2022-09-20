import { helperFunction } from "./helperfunction.js"

async function shoppingCartTest() {
    helperFunction()

    await driver.findElement(By.id("add-to-cart-sauce-labs-bike-light")).click()

    await driver.findElement(By.id("shopping_cart_container")).click();

    await driver.findElement(By.id("checkout")).click();

    await driver.findElement(By.id("first-name")).sendKeys("Jacob");
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