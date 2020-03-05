let main_page = require('../pages/main');
let location_page = require('../pages/location');

describe ("Check that the text in more section of London and Paris locations is the same", function() {   
    it("test1", async function() {
        await main_page.get();
        await main_page.clickLocation();
        await location_page.selectCity('London');
        await main_page.clickMore();   
        let londonList = main_page.list;

        /*await main_page.get();
        await main_page.clickLocation();
        await location_page.selectCity('Paris');
        await main_page.clickMore();
        let ParisList = main_page.list;*/
        
       /* let num = londonList.length();
        for(let i = 0; i < num; i++){
            expect(await londonList.get(i).getText()).toBe(ParisList.get(i).getText());
        }*/
        
    });
    
    it("test1", async function() {
        await main_page.get();
        await main_page.clickLocation();
        await location_page.selectCity('Paris');
        await main_page.clickMore();
        let ParisList = main_page.list;       
    });
});