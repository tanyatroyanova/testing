let market_page = require('../pages/market');

describe("Работа с базовыми контролами", function() { 
  beforeAll(function() { 
    market_page.get();
    browser.sleep(20000);
  });

  it("check", async function() {
    await market_page.check(market_page.checkBox);
  });

  it("scroll", async function() {
    await market_page.scrollToTheElement(market_page.popularQuestionsText);  
  });

  it("check RadioButton", async function() {
    await market_page.scrollToTheElement(market_page.categoryText);
    await market_page.checkRadioButton(market_page.radioButtonDelivery);
  });

  it("uncheck", async function() {
    await market_page.scrollToTheElement(market_page.checkBox);
    await market_page.uncheck(market_page.checkBox);
  });
  
  it("ввести текст в инпут и получить введеный текст(getAttribute)", async function() {
    //await market_page.scrollToTheElement(market_page.searchInput);
    await market_page.insertTextInInput(market_page.searchInput, "hello Tanya!!!");
    console.log(await market_page.getInsertedText(market_page.searchInputSpan));
  });

  it("getAttribute(получить значение аттрибутов class, value)", async function() {
    console.log(await market_page.getClassAndValue(market_page.searchInputSpan));
  });

});
