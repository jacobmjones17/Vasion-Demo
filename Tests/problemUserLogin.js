/* This test is expected to fail at the end. The first half of the test passes by logging in the user. The user is expecting to see the images of each item, but rather he/she sees images of a dog. It tested the first item's image, which failed.*/

const {Builder, By, Key} = require ("selenium-webdriver");
const assert = require ("assert");

async function thirdLogin() {

    // Third Username Login Test - Expect to log in
    const driver = await new Builder().forBrowser("chrome").build();
    const userName = driver.findElement(By.id("user-name"));
    const password = driver.findElement(By.id("password"));

    driver.manage().window().maximize()

    await driver.get("https://www.saucedemo.com/");
    
    userName.clear();
    password.clear();

    await userName.sendKeys("problem_user");
    await password.sendKeys("secret_sauce", Key.RETURN);

    
    const promise = driver.getCurrentUrl().then(function(url){
        console.log("\x1B[31mWhat's wrong with the pictures!?")
        return url
    });
 
    const result = await promise;
 
    // Expect current URL to be inventory page
    assert.strictEqual(result, "https://www.saucedemo.com/inventory.html");

    const img = driver.findElement(By.xpath("//*[@id='item_4_img_link']/img"));
    const src = await img.getAttribute("src");

    // Expect image src to fail - Wrong images
    assert.strictEqual(src, "https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.34e7aa42.jpg");

    await driver.quit();
};

thirdLogin();
