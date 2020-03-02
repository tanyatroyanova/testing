describe("First tests", function() { 
  beforeAll(function() {
    browser.waitForAngularEnabled(false);  
    browser.get('https://www.bbc.com/');
  });

  it("test1", async function() {
    let search = await element(by.id('orb-search-q'));
    await search.sendKeys('selenium');      
    await console.log(await search.isDisplayed());
    await console.log(await search.isEnabled());       
    await element(by.xpath('//div[@id="orb-nav-links"]/ul/li[@class="orb-nav-newsdotcom"]/a')).click(); 
  });
});
