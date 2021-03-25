import *as faker from 'faker';
import { App } from '../../application/application';
//import { execute } from '../../utils/executeJS/index';
import {ExecuteJsScripts} from '../../utils/executeJS/index';


describe('REGISTERED USERS can add items to the wishlish', function() {

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
        app.home.openAllForCategory('MP3 Players');
        const ipodNano= app.productCategory.products.find(product => product.title() === 'iPod Nano');
        expect(ipodNano).toBeDefined();

        ipodNano.addToWishlist();
        expect(app.productCategory.successIcon).toBeDisplayed();

    });

});

describe('GUESTS can add items to the wishlish', function() {

    it('can be selected for comparison by guest', function () {
        const app = new App();
        app.home.openAllForCategory('MP3 Players');
        const ipodClassic = app.productCategory.products.find(product => product.title() === 'iPod Classic');
        expect(ipodClassic).toBeDefined();

        ipodClassic.compareThisProduct();
        expect(app.productCategory.successIcon).toBeDisplayed();
    });

    it('can be added to cart by guest', function () {
        const app = new App();
        app.home.openAllForCategory('MP3 Players');

        const ipodNano= app.productCategory.products.find(product => product.title() === 'iPod Nano');
        expect(ipodNano).toBeDefined();

        ipodNano.addToCart();
        expect(app.productCategory.successIcon).toBeDisplayed();
    });
});
