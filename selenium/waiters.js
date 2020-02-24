const {Builder, By} = require("selenium-webdriver");

async function customIsEnabledWaiter(elem, time) {
    let res;

    for (let i = 0; i <= time; i++) {
        if (!res) {
            await driver.sleep(i);
            res = await elem.isEnabled();
        } else {
            res = await elem.isEnabled();
            break;
        }
    } 
}

async function customIsDisplayedWaiter(elem, time) {
    let res;

    for (let i = 0; i <= time; i++) {
        if (!res) {
            await driver.sleep(i);
            res = await elem.isDisplayed();
        } else {
            res = await elem.isDisplayed();
            break;
        }
    }    
}

async function testChrome() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.bbc.com/");
    let elem1 = await driver.findElement(By.id("orb-search-q"));
    let elem2 = await driver.findElement(By.xpath('//div[@id="orb-nav-links"]/ul/li[@class="orb-nav-newsdotcom"]/a'));  
    await customIsDisplayedWaiter(elem1, 1000);
    await customIsEnabledWaiter(elem2, 1000);
    driver.quit();      
}

testChrome();
