async function navigationToItemTest() {
    await driver.findElement(By.id("item_4_img_link")).click();


    const currentUrl = driver.getCurrentUrl().then(function (url) {
        console.log("\x1B[32mThis is the item you clicked on!")
        return url
    })

    const pageResult = await currentUrl

    assert.strictEqual(pageResult, "https://www.saucedemo.com/inventory-item.html?id=4")

    await driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();

    await driver.quit()
}

navigationToItemTest()