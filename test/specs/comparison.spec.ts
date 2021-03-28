import *as faker from 'faker';
import { App } from '../../application/application';
import {ExecuteJsScripts} from '../../utils/executeJS/index';
import { itemsForSale } from '../../data/itemsForSale';

describe('REGISTERED USERS can add items to the comparison', function() {

    beforeEach(function(){

        const user = new ExecuteJsScripts().userRegistrationScripts.registerUserWithScript({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            telephone: faker.phone.phoneNumber(),
            password: faker.internet.password(),
            acceptTermsAndConditions: true,});
    });

    it('can be selected for comparison by registered user', function () {
        const app = new App();
        app.home.openAllForCategory(itemsForSale[4].category);

        const ipodShuffle= app.productCategory.products.find(product => product.title() === itemsForSale[4].name);
        expect(ipodShuffle).toBeDefined();

        ipodShuffle.compareThisProduct();

        expect(app.productCategory.successMessage.sucessIcon).toBeDisplayed();
        expect(app.productCategory.successMessage.linkToComparePage).toBeDisplayed();
        expect(app.productCategory.successMessage.linkToComparePage).toBeClickable();
    });

});

describe.only('GUESTS can add items to the cart, the comparison, the wishlish', function() {

    it('can be selected for comparison by guest', function () {
        const app = new App();
        app.home.openCategory(itemsForSale[0].category);

        const htcPhone= app.productCategory.products.find(product => product.title() === itemsForSale[0].name);
        expect(htcPhone).toBeDefined();
        htcPhone.compareThisProduct();

        expect(app.productCategory.successMessage.sucessIcon).toBeDisplayed();
        expect(app.productCategory.successMessage.linkToComparePage).toBeDisplayed();
        expect(app.productCategory.successMessage.linkToComparePage).toBeClickable();
    });

});
