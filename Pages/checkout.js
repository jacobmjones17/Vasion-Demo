const { Builder, By } = require("selenium-webdriver");
const helperFunction = require("../Tests/helperFunction.js")
const driver = helperFunction.driver
const firstName = driver.findElement(By.id("first-name"))

async function navigate() {
    await driver.findElement(By.id("checkout")).click();
}
module.exports = { navigate, firstName:firstName }