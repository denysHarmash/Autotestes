const LoginPage = require('../../pages/login.page');
const SecurePage = require('../../pages/secure.page');
const desktopPage = require('../../pages/desktopPage.js');
require("expect-webdriverio").setOptions({ wait: 2000, interval: 500 });
require('../../node_modules/webdriverio')


describe('My Login application', () => {
    it('should open desktop page', async () => {
        await desktopPage.open('desktops');
        await desktopPage.firstElement.click()
        let text = await desktopPage.price.getText();
        await expect(text).toBe('800.00');
    });
});

describe('My Login application', () => {
    it('should open desktop page and verify search field', async () => {
        await desktopPage.open('desktops');
        await desktopPage.search.setValue('1MP');
        await desktopPage.searchButton.click();
        await browser.saveScreenshot("./screen/screen1.png")
        let text = await desktopPage.searchResultTitle.getText();
        await expect(text).toBe('1MP 60GB Hard Drive Handycam Camcorder');
    });
});



