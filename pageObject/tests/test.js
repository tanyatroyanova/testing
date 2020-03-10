let main_page = require('../pages/main');
let location_page = require('../pages/location');

describe ("Check that the text in more section of London and Paris locations is the same", function() {   
    it("test1", async function() {
        await main_page.get();
        await main_page.clickLocation();
        await main_page.swithToTheTab(1);        
        await location_page.clearCityInputField();
        await location_page.selectCity('London'); 
        browser.sleep(5000);  
        let londonMoreList = await main_page.rememberTheMoreList(); 
        //console.log(londonMoreList);

        await main_page.get();
        await main_page.clickLocation();
        await main_page.swithToTheTab(2);        
        await location_page.clearCityInputField();
        browser.sleep(1000); 
        await location_page.selectCity('Paris');  
        browser.sleep(2000);   
        let parisMoreList = await main_page.rememberTheMoreList(); 
        
        expect(londonMoreList).toEqual(parisMoreList);      
    });
});