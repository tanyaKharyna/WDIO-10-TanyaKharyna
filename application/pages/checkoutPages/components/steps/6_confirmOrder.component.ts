export class ConfirmOrderComponent {
    private get root(): WebdriverIO.Element {
        return $('div#collapse-checkout-confirm').parentElement();
    }

    continue() {
        const continueButton = this.root.$('input[type="button"][value="Confirm Order"]#button-confirm');
        continueButton.waitForDisplayed(
            { timeout: 5000 },
            { message: 'Expected Continue button to be visible'});
        continueButton.click();
    }
}
