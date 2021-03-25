import *as faker from 'faker';
import { App } from '../../application/application';
//import { execute } from '../../utils/executeJS/index';
import {ExecuteJsScripts} from '../../utils/executeJS/index';


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
        app.home.openAllForCategory('MP3 Players');
        const ipodNano= app.productCategory.products.find(product => product.title() === 'iPod Nano');
        expect(ipodNano).toBeDefined();

        ipodNano.compareThisProduct();
        expect(app.productCategory.successIcon).toBeDisplayed();
    });

});

describe('GUESTS can add items to the cart, the comparison, the wishlish', function() {

    it('can be selected for comparison by guest', function () {
        const app = new App();
        app.home.openAllForCategory('MP3 Players');
        const ipodClassic = app.productCategory.products.find(product => product.title() === 'iPod Classic');
        expect(ipodClassic).toBeDefined();

        ipodClassic.compareThisProduct();
        expect(app.productCategory.successIcon).toBeDisplayed();
    });

});
