export class CheckoutOtionsComponent {

    private get root(): WebdriverIO.Element{
        return $('div#collapse-checkout-option').parentElement();
    } 

    selectGuestCheckout() {
       const guestCheckoutRadio = this.root.$('input[type="radio"][value="guest"]');
       expect(guestCheckoutRadio).toBeClickable({ message: 'Expected Guest Checkout radio button to be visible. Make sure you are not logged in' });
       guestCheckoutRadio.click();
    }

    selectRegisterAccount() {
        const registerAccountCheckoutRadio = this.root.$('input[type="radio"][value="register"]');
        expect(registerAccountCheckoutRadio).toBeClickable({ message: 'Expected Register user for Checkout radio button to be visible' });
        registerAccountCheckoutRadio.click();
     }

    continue() {
        browser.pause(3000);
        const continueButton = this.root.$('input[type="button"][value="Continue"]#button-account');
        continueButton.click();
        // Саша,я чомусь так і не змогла добитись тут таймауту без browser.pause(). тест падає через "element not interactable"
        //Нище варінти, які я пробувала
        //
        //continueButton.waitForClickable({ timeout: 10000 });
        //continueButton.waitForDisplayed({ timeout: 5000 });
        //browser.waitUntil(() => return continueButton.isDisplayed(), {
        //timeoutMsg: "Expected Continue button to be loaded"
        //});
    }
}