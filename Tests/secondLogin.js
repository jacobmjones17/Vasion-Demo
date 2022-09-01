/* This test is expected to fail. The user tries to login but their account has been locked out and cannot access the site. The tests expects the user to be able to sign in, so it tells the developer that the URL is not the expected URL.*/

const {Builder, By, Key} = require ("selenium-webdriver");
const assert = require ("assert");

async function secondLogin() {

    // Second Username Login Test - Expect to fail because user is locked out
    const driver = await new Builder().forBrowser("chrome").build();
    const userName = driver.findElement(By.id("user-name"));
    const password = driver.findElement(By.id("password"));

    
    await driver.get("https://www.saucedemo.com/");
    
    userName.clear();
    password.clear();

    await userName.sendKeys("locked_out_user");
    await password.sendKeys("secret_sauce", Key.RETURN);

    
    const promise = driver.getCurrentUrl().then(function(url){
        console.error("\x1B[31mUsername not accepted!")
        return url
    });
 
    const result = await promise;

    // Actual vs Expected
    assert.strictEqual(result, "https://www.saucedemo.com/inventory.html")
 
    await driver.quit();
};

secondLogin();