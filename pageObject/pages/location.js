let location_page = function() {     
    let searchCity = element(by.className('input__control input__input')); 
    let cityPopup = element(by.className('popup popup_animate_no popup_theme_ffffff popup_autoclosable_yes popup_adaptive_yes input__popup input__popup_type_geo input__popup_fade_yes i-bem popup_js_inited popup_to_bottom'));  

    this.selectCity = async function(name) {
        await searchCity.sendKeys(name);
        let until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(cityPopup), 5000, 'cityPopup taking too long to appear in the DOM');
        await element(by.className('b-autocomplete-item b-autocomplete-item_type_geo b-autocomplete-item_subtype_region i-bem b-autocomplete-item_js_inited')).click();   
    };

    this.clearCityInputField = async function() {
        await searchCity.clear();
        let until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(cityPopup), 5000, 'cityPopup taking too long to appear in the DOM');
    };
};
module.exports = new location_page();
