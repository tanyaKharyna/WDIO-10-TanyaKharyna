import { App } from "../../../application/application";
import*as faker from 'faker';
import { itemsForSale } from "../../../data/itemsForSale";
const path = require('path');


describe('Items checkout shoul work as expected', function() {

    it('can be purchased by guest', function() {
        const app = new App();
        const ipodShuffle = itemsForSale.find(item => item.name === 'iPod Shuffle');

        app.home.openCategory(ipodShuffle.category);

        const itemToAdd = app.productCategory.products.find(product => product.title() ===  ipodShuffle.name);
        expect(itemToAdd).toBeDefined();
        itemToAdd.addToCart();

        app.checkout.open();

        app.checkout.checkoutOptions.selectGuestCheckout();
        app.checkout.checkoutOptions.continue();

        app.checkout.billingDetailsCommon.fillBillingDetails({
            firstName:  faker.name.firstName(),
            lastName:  faker.name.lastName(),
            email: faker.internet.email(),
            telephone: faker.phone.phoneNumber(),
            address1: faker.address.streetName(),
            city: faker.address.city(),
            postCode: faker.address.zipCode(),
            country: 'Ukraine',
            region: 'Kyiv'
        });
        app.checkout.billingDetailsCommon.continue();

        app.checkout.deliveryMethod.continue();

        app.checkout.paymentMethod.acceptTermsAndConditions();
        app.checkout.paymentMethod.continue();

        app.checkout.confirmOrder.continue();

        browser.waitUntil(() => app.confirmation.isOpened(), {
            timeoutMsg: "Expected Confirmation page to be visible"
        });
    });

    it('can purchased by guest with different billing and shipping addresses',function(){
        const app = new App();
        const ipodClassic = itemsForSale.find(item => item.name === 'iPod Classic');

        app.home.openAllForCategory(ipodClassic.category);

        const itemToAdd = app.productCategory.products.find(product => product.title() === ipodClassic.name);
        expect(itemToAdd).toBeDefined();
        itemToAdd.addToCart();

        app.checkout.open();

        app.checkout.checkoutOptions.selectGuestCheckout();
        app.checkout.checkoutOptions.continue();
        app.checkout.billingDetailsCommon.fillBillingDetails({
            firstName:  faker.name.firstName(),
            lastName:  faker.name.lastName(),
            email: faker.internet.email(),
            telephone: faker.phone.phoneNumber(),
            address1: faker.address.streetName(),
            city: faker.address.city(),
            postCode: faker.address.zipCode(),
            country: 'Togo',
            region: 'Kara',
        });

        app.checkout.billingDetailsCommon.chooseDiffDeliveryAdress();
        app.checkout.billingDetailsCommon.continue();

        app.checkout.shippingDetails.fillDeliveryDetails({
            firstName:  faker.name.firstName(),
            lastName:  faker.name.lastName(),
            address1: faker.address.streetName(),
            city: faker.address.city(),
            postCode: faker.address.zipCode(),
            country: 'Sweden',
            region: 'Stockholm',
        });
        app.checkout.shippingDetails.continue();

        app.checkout.deliveryMethod.continue();

        app.checkout.paymentMethod.acceptTermsAndConditions();
        app.checkout.paymentMethod.continue();

        app.checkout.confirmOrder.continue();

        browser.waitUntil(() => app.confirmation.isOpened(), {
            timeoutMsg: "Expected Confirmation page to be loaded"
        });

    });

    it('can be purchased if user registers',function(){
        const app = new App();
        const htcPhone = itemsForSale.find(item => item.name === 'HTC Touch HD');

        app.home.openAllForCategory(htcPhone.category);

        const itemToAdd = app.productCategory.products.find(product => product.title() === htcPhone.name);
        expect(itemToAdd).toBeDefined();
        itemToAdd.addToCart();

        app.checkout.open();

        app.checkout.checkoutOptions.selectRegisterAccount();
        app.checkout.checkoutOptions.continue();

        app.checkout.billingDetailsCommon.fillBillingDetails({
            firstName:  faker.name.firstName(),
            lastName:  faker.name.lastName(),
            email: faker.internet.email(),
            telephone: faker.phone.phoneNumber(),
            address1: faker.address.streetName(),
            city: faker.address.city(),
            postCode: faker.address.zipCode(),
            country: 'Sweden',
            region: 'Stockholm'
        });

        const passString = faker.internet.password();
        app.checkout.billingDetailsCommon.billingDetailsForNewUsers.setPassword(passString);
        app.checkout.billingDetailsCommon.billingDetailsForNewUsers.agreeReceiveNewsletter();
        app.checkout.billingDetailsCommon.billingDetailsForNewUsers.agreeTermsAndCondtitions();
        app.checkout.billingDetailsCommon.continue();

        app.checkout.shippingDetails.continue();

        app.checkout.deliveryMethod.continue();

        app.checkout.paymentMethod.acceptTermsAndConditions();
        app.checkout.paymentMethod.continue();

        app.checkout.confirmOrder.continue();

        browser.waitUntil(() => app.confirmation.isOpened(), {
            timeoutMsg: "Expected Confirmation page to be loaded"
        });
    });

});
