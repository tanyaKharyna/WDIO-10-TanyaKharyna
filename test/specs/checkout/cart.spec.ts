import *as faker from 'faker';
import { App } from '../../../application/application';
import { ExecuteJsScripts } from '../../../utils/executeJS/index';
//import { execute } from '../../utils/executeJS/index';


describe('REGISTERED USERS can add items to the cart', function() {

    /*
* to-do: rewrite tests using these data
*

    const itemsForSale = [
        {
            category: 'Phones & PDAs',
            name: 'HTC Touch HD',
            price: '$122.00'
        },
        {   category: 'Phones & PDAs'
            name: 'iPhone',
            price: '$123.20'
        },
    ];

*/
    beforeEach(function(){

        const user = new ExecuteJsScripts().userRegistrationScripts.registerUserWithScript({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            telephone: faker.phone.phoneNumber(),
            password: faker.internet.password(),
            acceptTermsAndConditions: true,});
    });

    it('can be added to cart by registered user', function () {
        const app = new App();
        app.home.openAllForCategory('MP3 Players');
        const ipodNano= app.productCategory.products.find(product => product.title() === 'iPod Nano');
        expect(ipodNano).toBeDefined();

        ipodNano.addToCart();
        expect(app.productCategory.successIcon).toBeDisplayed();
    });

});

describe('GUESTS can add items to the cart', function() {

    it('can be added to cart by guest', function () {
        const app = new App();
        app.home.openAllForCategory('MP3 Players');

        const ipodNano= app.productCategory.products.find(product => product.title() === 'iPod Nano');
        expect(ipodNano).toBeDefined();

        ipodNano.addToCart();
        expect(app.productCategory.successIcon).toBeDisplayed();
    });

    it('two items can be added to the cart', function () {
        const app = new App();
        app.home.openAllForCategory('Phones & PDAs');

        const htcPhone= app.productCategory.products.find(product => product.title() === 'HTC Touch HD');
        expect(htcPhone).toBeDefined();

        const iphonePhone = app.productCategory.products.find(product => product.title() === 'HTC Touch HD');
        expect(iphonePhone).toBeDefined();

        htcPhone.addToCart();
        iphonePhone.addToCart();

        expect(app.productCategory.successIcon).toBeDisplayed();
    });
});
