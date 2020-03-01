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

fdescribe("Assertions tests", function() {
  
  it("сравнение двух чисел", function() {
    let a = 1;
    let b = 1;
    expext(a).toBe(a);
    expect(a).toEqual(b);      
  });

  it("сравнение двух строк на полное совпадение", function() {
    expext('abc').toMatch('abc');     
  });

  it("сравнение двух строк на частичное совпадени(содержит)", function() {
    expext('aaaabcrefgweg').toContain('abc');     
  });

  it("сравнение массивов", function() {
    let arr1 = [1, 2, 3];
    let arr2 = [1, 2, 3];
    expext(arr1).toEqual(arr2); 
    expext(arr1).to(arr2);   
  });

});
