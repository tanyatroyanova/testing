let market_page = function() {

    this.popularQuestionsText = element(by.className("_1GbfG8Wxnd"));
    this.checkBox = element(by.id("local-offers-first"));
    this.radioButtonDelivery = element(by.className("_2zRi9ex2Rl"));
    this.categoryText = element(by.className("_3xtMbW8XL4"));   
    this.searchInput = element(by.className("input__control"));
    
    this.searchInputSpan = element(by.className("suggest2-autocomplete__entered"));

    this.get = async function() {
        browser.waitForAngularEnabled(false); 
        await browser.get("https://market.yandex.by/catalog--mobilnye-telefony-v-minske/54726/list?local-offers-first=0&onstock=1");
    };

    this.scrollToTheElement = function(element) {
        browser.actions().mouseMove(element).perform();
    };

    this.check = function(element) {  
        if (element.checked == true) {
            element.click();
        }            
    };

    this.uncheck = function(element) {  
        if (element.checked == false) {
            element.click();
        }            
    };

    this.checkRadioButton = function(element) {
        element.click();
    };
    this.insertTextInInput = function(element, text) {
        element.sendKeys(text);
    };

    this.getInsertedText = function(element) {
        return element.getAttribute('value');
    };

    this.getClassAndValue = async function(element) {
        return await element.getAttribute('value');
        return await element.getAttribute('class');
    }

}

module.exports = new market_page();
