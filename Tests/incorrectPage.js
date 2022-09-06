/* This test fails. It tests to click on the first item and to make sure it goes to that item's page. The test fails because when you click on one item, it goes to a different item's page. */

const {Builder, By, Key} = require ("selenium-webdriver");
const assert = require ("assert");

async function incorrectPage() {
    const driver = await new Builder().forBrowser("chrome").build()
    const userName = driver.findElement(By.id("user-name"));
    const password = driver.findElement(By.id("password"));

    driver.manage().window().maximize()


    // open Saucedemo.com
    await driver.get("https://www.saucedemo.com/");
    
    // enter username & password
    userName.clear();
    password.clear();

    await userName.sendKeys("problem_user");
    await password.sendKeys("secret_sauce", Key.RETURN);

    await driver.findElement(By.id("item_4_img_link")).click();

    const currentUrl = driver.getCurrentUrl().then(function (url) {
        console.log("\x1B[31mWent to the wrong item!")
        return url
    });

    const pageResult = await currentUrl;

    assert.strictEqual(pageResult, "https://www.saucedemo.com/inventory-item.html?id=4");

    await driver.quit();

}

incorrectPage();