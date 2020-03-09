let main_page = require('../pages/main');
let location_page = require('../pages/location');

describe ("Check that the text in more section of London and Paris locations is the same", function() {   
    it("test1", async function() {
        await main_page.get();
        await main_page.clickLocation();
        await main_page.swithToTheSecondTab();        
        await location_page.clearCityInputField();
        await location_page.selectCity('London');   
        let londonMoreList = await main_page.rememberTheMoreList(); 
        console.log(londonMoreList);
    
        //browser.sleep(10000);
/*
        await main_page.clickLocation();
        await main_page.swithToTheSecondTab();        
        await location_page.clearCityInputField();
        await location_page.selectCity('Paris');   
        let parisMoreList = await main_page.rememberTheMoreList(); 
        
        expect(londonMoreList).toEqual(parisMoreList);      */
    });
});