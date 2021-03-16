import { App } from "../../applictation/application";
import { ConfirmationPage } from "../../applictation/pages/checkoutPages/confirmation.page";
import { CheckoutPage } from "../../applictation/pages/checkoutPages/index";
import { HomePage } from "../../applictation/pages/home/home.page";
import { ProductCategoryPage } from "../../applictation/pages/productCategoryPage"

describe('Item', function() {
    it('can be purchased', function() {
        const app = new App();

        app.home.openAllForCategory('MP3 Players');


        const iPodShuffle = app.productCategory.products.find(product => product.title() === 'iPod Shuffle')

        expect(iPodShuffle).toBeDefined();
        
        iPodShuffle.addToCart();
        browser.pause(3000);

      
        app.checkout.open();
        console.warn({message: 'fuuuccck!'})
        browser.pause(2000)
        app.checkout.checkoutOptions.selectGuestCheckout();
        app.checkout.checkoutOptions.continue();
        browser.pause(4000);
        app.checkout.billingDetails.fillBillingDetails({
            firstName: 'test',
            lastName: 'test',
            email: `test+${Date.now()}@test.com`,
            telephone: '123123123',
            address1: 'test',
            city: 'test',
            postCode: '123123',
            country: 'Ukraine',
            region: 'Kyiv'
        });
        app.checkout.billingDetails.continue();
        app.checkout.deliveryMethod.continue();
        app.checkout.paymentMethod.acceptTermsAndConditions();
        app.checkout.paymentMethod.continue();

        app.checkout.confirmOrder.continue();

        //expect(app.confirmation.isOpened()).toBeTruthy();
        
       browser.waitUntil(() => app.confirmation.isOpened(), {
         timeoutMsg: "Expected confirmation page to be loaded"
      });
     })
})