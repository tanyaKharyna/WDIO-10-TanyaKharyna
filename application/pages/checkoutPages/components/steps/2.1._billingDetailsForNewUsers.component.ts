/**
     * Applicable if a user creates an account while placing an order
     */

export class BillingDetailsForNewUsers {

    private get root(): WebdriverIO.Element{
        return $('div#collapse-payment-address').parentElement();
    }

    setPassword(password: string) {
        this.root.$('input[type="password"]#input-payment-password').setValue(password);
        this.root.$('input[type="password"]#input-payment-confirm').setValue(password);
    }

    agreeReceiveNewsletter() {
        const checkbox =  this.root.$('input[type="checkbox"][name="newsletter"]');
        checkbox.click();

    }

    agreeTermsAndCondtitions() {
        const checkbox =this.root.$('input[type="checkbox"][name="agree"]');
        checkbox.click();
    }
}
