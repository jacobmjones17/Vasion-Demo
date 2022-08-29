const {Buidler, Builder, Browser} = require ("selenium-webdriver");

async function login() {

// launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

// navigate to our application
    await driver.get("https://www.saucedemo.com/")

// login


//close the browser
}

login()