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
        const palmTreoPro = itemsForSale.find(item => item.name === 'Palm Treo Pro');

        app.home.openCategory(palmTreoPro.category);

        const itemToAdd = app.productCategory.products.find(product => product.title() ===  palmTreoPro.name);
        expect(itemToAdd).toBeDefined();
        itemToAdd.addToWishlist();

        expect(app.productCategory.successMessage.sucessIcon).toBeDisplayed({
            message: '[Product Page]: Expected Sucess icon to be visible'
        });
        expect(app.productCategory.successMessage.linkToWishlist).toBeDisplayed({
            message: '[Product Page]: Expected link to the Wishlist page from the success message to be visible and clickable'
        });
    });

});

describe('GUESTS can add items to the wishlish', function() {

    it.only('can be added to wishlist by guest', function () {
        const app = new App();
        const sonyVAIO = itemsForSale.find(item => item.name === 'Sony VAIO');

        app.home.openAllForCategory(sonyVAIO.category);

        const itemToAdd = app.productCategory.products.find(product => product.title() ===  sonyVAIO.name);
        expect(itemToAdd).toBeDefined();
        itemToAdd.addToWishlist();

        expect(app.productCategory.successMessage.sucessIcon).toBeDisplayed({
            message: '[Product Page]: Expected Sucess icon to be visible'
        });
        expect(app.productCategory.successMessage.linkToWishlist).toBeClickable({
            message: '[Product Page]: Expected link to the Wishlist page from the success message to be visible and clickable'
        });
    });

});
