export class ShippingDetailsComponent {
    
    private get root(): WebdriverIO.Element {
        return $('div#collapse-shipping-address').parentElement();
    }

    chooseNewDeliveryAddress() {
        this.root.$('input[type="radio"][name="shipping_address"][value="new"]').click();

    }

    fillDeliveryDetails(data: {
        firstName: string,
        lastName: string,
        address1: string,
        city: string,
        postCode: string,
        country: string,
        region: string
    }) {
        console.log('[ShippingDetailsComponent] Filling biling details step', JSON.stringify(data, null, 2));
        this.root.$('#input-shipping-firstname').setValue(data.firstName);
        this.root.$('#input-shipping-lastname').setValue(data.lastName);
        this.root.$('#input-shipping-address-1').setValue(data.address1);
        this.root.$('#input-shipping-city').setValue(data.city);
        this.root.$('#input-shipping-postcode').setValue(data.postCode);
        this.root.$('#input-shipping-country').selectByVisibleText(data.country);
        /*browser.waitUntil(
            () =>$('#input-payment-zone').selectByVisibleText(data.region),
            {
                timeout: 3000,
                timeoutMsg: 'Expected to selected the city after 3s'
            }
        );
        */
        browser.pause(2000);
        this.root.$('#input-shipping-zone').selectByVisibleText(data.region);
    }
    
    continue() {
        browser.pause(500)
        const continueButton = this.root.$('input[type="button"][value="Continue"]');
        expect(continueButton).toBeClickable({ message: 'Expected Continue button to be visible' });
        continueButton.click();
    }
}