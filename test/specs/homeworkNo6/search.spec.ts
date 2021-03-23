import { App } from "../../../application/application";
import { registerUserWithScript } from "../../../helpers/jsScripts/registerUser.script";
import *as faker from 'faker';

describe("Items search", function() {
    it("should show results in case multiple items matches", function() {
        const app = new App();

        const searchStr = 'Mac';
        app.home.searchBar.search(searchStr);

        app.searchResulsPage.itemsFound.checkSearchResultIsCorrect(searchStr);
    });

    it("should redirect to 'no matching results' in case no items matched", function() {
        const app = new App();

        const searchStr = 'non existent name';
        app.home.searchBar.search(searchStr);

        app.searchResulsPage.itemsFound.checkSearchResultIsEmpty();

    });

    it.only("should register user with JS", function() {
        const app = new App();
        app.registerAccount.open();
        registerUserWithScript({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            telephone: faker.phone.phoneNumber(),
            password: faker.internet.password(),
            acceptTermsAndConditions: true,
        });
        browser.pause(9000);

    });

});
