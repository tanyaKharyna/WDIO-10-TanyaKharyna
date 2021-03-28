import *as faker from 'faker';
import { App } from '../../application/application';
import {ExecuteJsScripts} from '../../utils/executeJS/index';
import { itemsForSale } from '../../data/itemsForSale';


describe.only('REGISTERED USERS can add items to the wishlish', function() {

    beforeEach(function(){

        const user = new ExecuteJsScripts().userRegistrationScripts.registerUserWithScript({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            telephone: faker.phone.phoneNumber(),
            password: faker.internet.password(),
            acceptTermsAndConditions: true,});
    });

    it('can be added to wishlist', function () {
        const app = new App();
        app.home.openCategory(itemsForSale[7].category);
        const palmTreoPro= app.productCategory.products.find(product => product.title() === itemsForSale[7].name);
        expect(palmTreoPro).toBeDefined();

        palmTreoPro.addToWishlist();

        expect(app.productCategory.successMessage.sucessIcon).toBeDisplayed();
        expect(app.productCategory.successMessage.linkToWishlist).toBeDisplayed();
    });

});

describe('GUESTS can add items to the wishlish', function() {

    it('can be added to cart by guest', function () {
        const app = new App();
        app.home.openAllForCategory(itemsForSale[8].category);

        const sonyVaio= app.productCategory.products.find(product => product.title() === itemsForSale[8].name);
        expect(sonyVaio).toBeDefined();

        sonyVaio.addToWishlist();

        expect(app.productCategory.successMessage.sucessIcon).toBeDisplayed();
        expect(app.productCategory.successMessage.linkToWishlist).toBeDisplayed();
        expect(app.productCategory.successMessage.linkToWishlist).toBeClickable();
    });
});
