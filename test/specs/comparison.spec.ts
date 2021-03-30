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
        const ipodShuffle = itemsForSale.find(item => item.name === 'iPod Shuffle');

        app.home.openAllForCategory(ipodShuffle.category);

        const itemToAdd = app.productCategory.products.find(product => product.title() ===  ipodShuffle.name);
        expect(itemToAdd).toBeDefined();
        itemToAdd.compareThisProduct();

        expect(app.productCategory.successMessage.sucessIcon).toBeDisplayed({
            message: '[Product Page]: Expected Sucess icon to be visible'
        });
        expect(app.productCategory.successMessage.linkToComparePage).toBeClickable({
            message: '[Product Page]: Expected link to the ComparePage from the success message to be visible and clickable'
        });
    });

});

describe('GUESTS can add items to the cart, the comparison, the wishlish', function() {

    it('can be selected for comparison by guest', function () {
        const app = new App();
        const ipodClassic = itemsForSale.find(item => item.name === 'iPod Classic');

        app.home.openAllForCategory(ipodClassic.category);

        const itemToAdd = app.productCategory.products.find(product => product.title() ===  ipodClassic.name);
        expect(itemToAdd).toBeDefined();
        itemToAdd.compareThisProduct();

        expect(app.productCategory.successMessage.sucessIcon).toBeDisplayed({
            message: '[Product Page]: Expected Sucess icon to be visible'
        });
        expect(app.productCategory.successMessage.linkToComparePage).toBeClickable({
            message: '[Product Page]: Expected link to the ComparePage from the success message to be visible and clickable'
        });
    });

});
