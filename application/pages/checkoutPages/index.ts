import { CheckoutOtionsComponent } from "./components/steps/1_checkoutOptions.component";
import { BillingDetailsForNewUsers } from "./components/steps/2.1._billingDetailsForNewUsers.component";
import { BillingDetailsCommonComponent } from "./components/steps/2_billingDetailsCommon.component";
import { ShippingDetailsComponent } from "./components/steps/3_shippingDetails.component";
import { DeliveryMethodComponent } from "./components/steps/4_deliveryMethod.component";
import { PaymentMethodComponent } from "./components/steps/5_paymentMethod.component";
import { ConfirmOrderComponent } from "./components/steps/6_confirmOrder.component";

export class CheckoutPage {

    open(){
        browser.url('index.php?route=checkout/checkout');
        browser.url('index.php?route=checkout/checkout');
    }

    get checkoutOptions () {
        return new CheckoutOtionsComponent();
    }

    get billingDetailsCommon () {
        return new BillingDetailsCommonComponent();
    }
    get billingDetailsForNewUsers() {
        return new BillingDetailsForNewUsers();
    }
    
    get shippingDetails() {
        return new ShippingDetailsComponent();
    }

    get deliveryMethod () {
        return new DeliveryMethodComponent();
    }

    get paymentMethod () {
        return new PaymentMethodComponent();
    }

    get confirmOrder () {
        return new ConfirmOrderComponent();
    }

}