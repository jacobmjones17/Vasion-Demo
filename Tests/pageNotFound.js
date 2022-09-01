// const {Builder, By, Key} = require ("selenium-webdriver");
// const assert = require ("assert");
// const javascriptExecutor = require ("")

// async function thirdLogin() {
//     const driver = await new Builder().forBrowser("chrome").build();
//     const userName = driver.findElement(By.id("user-name"));
//     const password = driver.findElement(By.id("password"));

//     // open Saucedemo.com
//     await driver.get("https://www.saucedemo.com/");
    
//     // enter username & password
//     userName.clear();
//     await userName.sendKeys("problem_user");
    
//     await password.sendKeys("secret_sauce", Key.RETURN);

//     await driver.findElement(By.id("react-burger-menu-btn")).click();

//     await driver.findElement(By.id("about_sidebar_link")).getLocation().getX();

//     const promise = driver.getCurrentUrl().then(function(url){
//         console.log("\x1B[31mPage not found!!??")
//         return url
//     });

//     console.log(promise)
//     const result = await promise;
 
//     assert.strictEqual(result, "https://saucelabs.com/");

//     await driver.quit()

// };

// thirdLogin();