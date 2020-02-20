const {Builder, By, Key, util} = require("selenium-webdriver");

const singleton = (function() {
    
    let instance;
    
    async function exampleChrome() {
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.bbc.com/");
        await driver.findElement(By.id("orb-search-q")).sendKeys("selenium");
        console.log(driver.findElement(By.id("orb-search-q")).isDisplayed());
        console.log(driver.findElement(By.id("orb-search-q")).isEnabled());
        await driver.findElement(By.xpath('//div[@id="orb-nav-links"]/ul/li[@class="orb-nav-newsdotcom"]/a')).click();        
    }

    async function exampleFireFox() {
        let driver = await new Builder().forBrowser("firefox").build();
        await driver.get("https://www.bbc.com/");
        await driver.findElement(By.id("orb-search-q")).sendKeys("selenium");
        await driver.findElement(By.xpath('//div[@id="orb-nav-links"]/ul/li[@class="orb-nav-newsdotcom"]/a')).click();       
    }    

    async function exampleIE() {
        let driver = await new Builder().forBrowser("ie").build();
        await driver.get("https://www.bbc.com/");
        await driver.findElement(By.css('input#orb-search-q')).sendKeys("selenium");
        //await driver.findElement(By.css("#orb-search-button")).click();
    }

    function createInstance() {
        return {
            exampleChrome: exampleChrome,
            exampleFireFox: exampleFireFox,
            exampleIE: exampleIE
        }
    }

    return {
      getInstance: function() {
        if(!instance) {
          instance = createInstance();
        }
        return instance;
      }
    }
  })();

singleton.getInstance().exampleChrome();
singleton.getInstance().exampleFireFox();
singleton.getInstance().exampleIE();

