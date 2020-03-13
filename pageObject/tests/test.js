let main_page = require('../pages/main');
let location_page = require('../pages/location');
let waits = require('../pages/waits');

describe ("Check that the text in more section of London and Paris locations is the same", function() {   
    it("test1", async function() {
        await main_page.get();
        await main_page.clickLocation();
        await main_page.swithToTheTab(1);        
        await location_page.clearCityInputField();
        await location_page.selectCity('London'); 
        let londonMoreList = await main_page.rememberTheMoreList(); 

        await main_page.get();
        await main_page.clickLocation();
        await main_page.swithToTheTab(2);        
        await location_page.clearCityInputField();
        await location_page.selectCity('Paris');    
        let parisMoreList = await main_page.rememberTheMoreList(); 
        
        expect(londonMoreList).toEqual(parisMoreList);      
    });
});
