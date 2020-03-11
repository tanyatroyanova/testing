let main_page = function() {   
    let changeLocationButton = element(by.className('home-link geolink link_geosuggest_yes home-link_black_yes'));
    
    let moreButton = element(by.className('home-link home-link_blue_yes home-tabs__link home-tabs__more-switcher dropdown2__switcher'));
    this.list = element.all(by.className('home-link home-tabs__more-link home-link_black_yes'));
     
    this.get = async function() {
        browser.waitForAngularEnabled(false); 
        await browser.get('https://yandex.by/');
    };

    this.enterName = async function(name) {
        await nameTextBox.sendKeys(name);
    };
     
    this.clickLocation = async function() {
        await changeLocationButton.click();
    };     

    this.swithToTheTab = async function(number) {
        await browser.getAllWindowHandles().then(async function (handles){
            await browser.switchTo().window(handles[number])
        });
    };

    this.rememberTheMoreList = async function() {  
        let until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(moreButton), 5000, 'moreButton taking too long to appear in the DOM');     
        await moreButton.click();
        let theMoreList = element.all(by.className('home-link home-tabs__more-link home-link_black_yes')).getText();
        return theMoreList;
    };

};
module.exports = new main_page();
