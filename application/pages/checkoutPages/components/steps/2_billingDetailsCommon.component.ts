import { BillingDetailsForNewUsers } from "./2.1._billingDetailsForNewUsers.component";

export class BillingDetailsCommonComponent{

    private get root(): WebdriverIO.Element{
        return $('div#collapse-payment-address').parentElement();
    }

    get billingDetailsForNewUsers(){
        return new BillingDetailsForNewUsers()
    }

    fillBillingDetails(data: {
        firstName: string,
        lastName: string,
        email: string,
        telephone: string,
        address1: string,
        city: string,
        postCode: string,
        country: string,
        region: string
    }) {
        console.log('[BillingDetailsComponent] Filling biling details step', JSON.stringify(data, null, 2));
        this.root.$('#input-payment-firstname').setValue(data.firstName);
        this.root.$('#input-payment-lastname').setValue(data.lastName);
        this.root.$('#input-payment-email').setValue(data.email);
        this.root.$('#input-payment-telephone').setValue(data.telephone);
        this.root.$('#input-payment-address-1').setValue(data.address1);
        this.root.$('#input-payment-city').setValue(data.city);
        this.root.$('#input-payment-postcode').setValue(data.postCode);
        this.root.$('#input-payment-country').selectByVisibleText(data.country);
        browser.pause(3000);
        this.root.$('#input-payment-zone').selectByVisibleText(data.region);
    }

    isDeliveryBilingAddressSame(): boolean{
        return this.root.$('input[type="checkbox"][name="shipping_address"]').isSelected();
    }

    chooseDiffDeliveryAdress(){
        const checkbox =  this.root.$('input[type="checkbox"][name="shipping_address"]')
        checkbox.click();
        expect(checkbox).not.toBeSelected({ message: 'Expected Different billing and delivery address to be not selected after a click'});
    }

    continue() {
        const continueButton = this.root.$('input[type="button"][value="Continue"]');
        expect(continueButton).toBeClickable({ message: 'Expected Continue button to be visible' });
        continueButton.click();
    }

}
