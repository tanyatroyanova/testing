let waits = function() {     
    
    this.waitForVisibleElement = async function(elem) {
        let until = protractor.ExpectedConditions;
        await browser.wait(until.presenceOf(elem), 5000, 'Element taking too long to appear in the DOM');
    };
};
module.exports = new waits();
