let location_page = function() {     
    let searchCity = element(by.className('input__control input__input'));   

    this.selectCity = async function(name) {
        await searchCity.sendKeys(name, protractor.Key.ENTER);
    };
};
module.exports = new location_page();
