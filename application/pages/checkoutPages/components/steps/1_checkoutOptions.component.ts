export class CheckoutOtionsComponent {

    private get root(): WebdriverIO.Element{
        return $('div.collapse.in#collapse-checkout-option').parentElement();
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
        const continueButton = this.root.$('input[type="button"][value="Continue"]#button-account');
        continueButton.waitForDisplayed(
            { timeout: 5000 },
            {message: 'Expected Continue button to be visible'});
        continueButton.click();
    }
}
