describe("First tests", function() { 
  beforeAll(function() {
    browser.waitForAngularEnabled(false);  
    browser.get('https://www.bbc.com/');
  });

  it("test1", function() {
    let search = element(by.id('orb-search-q'));
    search.sendKeys('selenium');      
    element(by.binding('News')).click();
    //console.log(search.isDisabled());
    //console.log(search.isEnabled());        
  });
});
