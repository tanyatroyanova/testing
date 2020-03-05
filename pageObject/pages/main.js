let main_page = function() {   
    let changeLocationButton = element(by.className('home-link geolink link_geosuggest_yes home-link_black_yes'));
    let moreButton = element(by.className('home-link home-link_blue_yes home-tabs__link home-tabs__more-switcher dropdown2__switcher i-bem _popup2-destructor _popup2-destructor_js_inited'));
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
     
    this.clickMore = async function() {
        await moreButton.click();
    };
};
module.exports = new main_page();
