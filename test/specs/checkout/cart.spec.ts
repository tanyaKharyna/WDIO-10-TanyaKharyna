import *as faker from 'faker';
import { App } from '../../../application/application';
import { itemsForSale } from '../../../data/itemsForSale';
import { ExecuteJsScripts } from '../../../utils/executeJS/index';

describe.only('GUESTS can add items to the cart', function() {

    it('one item can be added to cart by guest', function () {
        const app = new App();
        const ipodShuffle = itemsForSale.find(item => item.name === 'iPod Shuffle');

        app.home.openAllForCategory(ipodShuffle.category);

        const itemToAdd = app.productCategory.products.find(product => product.title() ===  ipodShuffle.name);
        expect(itemToAdd).toBeDefined();
        itemToAdd.addToCart();


        app.checkoutCartPage.open();
        expect(app.checkoutCartPage.shoppingCart.quantity).toEqual(1);
        expect(app.checkoutCartPage.shoppingCart.unitPriceItem).toEqual([ipodShuffle.price]);
        expect(app.checkoutCartPage.shoppingCart.totalPriceItem).toEqual([ipodShuffle.price]);
    });

    it('two different items can be added to cart by guest', function () {
        const app = new App();
        const htcPhone = itemsForSale.find(item => item.name === 'HTC Touch HD');
        const iPhone  = itemsForSale.find(item => item.name === 'iPhone');

        app.home.openCategory(htcPhone.category);

        const firstItem = app.productCategory.products.find(product => product.title() ===  htcPhone.name);
        firstItem.addToCart();

        const secondItem = app.productCategory.products.find(product => product.title() ===  iPhone.name);
        secondItem.addToCart();

        app.checkoutCartPage.open();
        const expectedTotalOfOrder = app.checkoutCartPage.shoppingCart.getExpectedTotal(htcPhone.price, iPhone.price);
        const actualTotal = app.checkoutCartPage.totalAmmount.getNumericTotal();

        expect(app.checkoutCartPage.shoppingCart.quantity).toEqual(2);
        expect (expectedTotalOfOrder).toEqual(actualTotal);

    });

});

describe('REGISTERED USERS can add items to the cart', function() {

    beforeEach(function(){

        const user = new ExecuteJsScripts().userRegistrationScripts.registerUserWithScript({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            telephone: faker.phone.phoneNumber(),
            password: faker.internet.password(),
            acceptTermsAndConditions: true,});
    });

    it('should show success message if user added item to cart', function () {
        const app = new App();
        const ipodNano  = itemsForSale.find(item => item.name === 'iPod Nano');

        app.home.openCategory(ipodNano.category);

        const itemToAdd = app.productCategory.products.find(product => product.title() ===  ipodNano.name);

        itemToAdd.addToCart();

        expect(app.productCategory.successMessage.linkToCart).toBeDisplayed({
            message: 'Expected thelink to cart to be visible'
        });
        expect(app.productCategory.successMessage.sucessIcon).toBeDisplayed({
            message: 'Expected Sucess icon to be visible'
        });
    });

    it('should save item added to the cart on shopping cart page', function () {
        const app = new App();
        const macBook = itemsForSale.find(item => item.name === 'MacBook');

        app.home.openAllForCategory(macBook.category);

        const itemToAdd = app.productCategory.products.find(product => product.title() ===  macBook.name);
        expect(itemToAdd).toBeDefined();
        itemToAdd.addToCart();

        app.productCategory.successMessage.goToCartFromMessage();

        expect(app.checkoutCartPage.shoppingCart.unitPriceItem).toEqual([macBook.price]);
        expect(app.checkoutCartPage.shoppingCart.totalPriceItem).toEqual([macBook.price]);
    });

});
