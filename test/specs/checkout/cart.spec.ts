import *as faker from 'faker';
import { App } from '../../../application/application';
import { itemsForSale } from '../../../data/itemsForSale';
import { ExecuteJsScripts } from '../../../utils/executeJS/index';

describe('GUESTS can add items to the cart', function() {

    it('one item can be added to cart by guest', function () {
        const app = new App();
        app.home.openAllForCategory(itemsForSale[4].category);

        const ipodShuffle= app.productCategory.products.find(product => product.title() === itemsForSale[4].name);
        expect(ipodShuffle).toBeDefined();

        ipodShuffle.addToCart();
        expect(app.productCategory.successMessage.linkToCart).toBeDisplayed();

        app.checkoutCartPage.open();
        expect(app.checkoutCartPage.shoppingCart.quantity).toEqual(1);
        expect(app.checkoutCartPage.shoppingCart.unitPriceItem).toEqual([itemsForSale[4].price]);
        expect(app.checkoutCartPage.shoppingCart.totalPriceItem).toEqual([itemsForSale[4].price]);
    });

    it('two different items can be added to cart by guest', function () {
        const app = new App();
        app.home.openCategory(itemsForSale[0].category);

        const htcPhone= app.productCategory.products.find(product => product.title() === itemsForSale[0].name);
        expect(htcPhone).toBeDefined();
        htcPhone.addToCart();


        const iphonePhone = app.productCategory.products.find(product => product.title() === itemsForSale[1].name);
        expect(iphonePhone).toBeDefined();
        iphonePhone.addToCart();

        app.checkoutCartPage.open();
        const expectedTotalOfOrder = app.checkoutCartPage.shoppingCart.getExpectedTotal(itemsForSale[0].price, itemsForSale[1].price);
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
        app.home.openAllForCategory(itemsForSale[3].category);

        const ipodNano= app.productCategory.products.find(product => product.title() === itemsForSale[3].name);
        expect(ipodNano).toBeDefined();

        ipodNano.addToCart();
        expect(app.productCategory.successMessage.linkToCart).toBeDisplayed();
        expect(app.productCategory.successMessage.sucessIcon).toBeDisplayed();
    });

    it('should save item added to the cart on shopping cart page', function () {
        const app = new App();
        app.home.openAllForCategory(itemsForSale[6].category);
        const macBook= app.productCategory.products.find(product => product.title() === itemsForSale[6].name);
        expect(macBook).toBeDefined();

        macBook.addToCart();
        app.productCategory.successMessage.goToCartFromMessage();

        expect(app.checkoutCartPage.shoppingCart.unitPriceItem).toEqual([itemsForSale[6].price]);
        expect(app.checkoutCartPage.shoppingCart.totalPriceItem).toEqual([itemsForSale[6].price]);
    });

});
