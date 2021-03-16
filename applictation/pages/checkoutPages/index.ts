import { CheckoutOtionsComponent } from "./components/steps/1_checkoutOptions.component";
import { BillingDetailsComponent } from "./components/steps/2_billingDetails.component";
import { DeliveryMethodComponent } from "./components/steps/4_deliveryMethod.component";
import { PaymentMethodComponent } from "./components/steps/5_paymentMethod.component";
import { ConfirmOrderComponent } from "./components/steps/6_confirmOrder.component";

export class CheckoutPage {

    open(){
        browser.url('index.php?route=checkout/checkout');
    }

    get checkoutOptions () {
        return new CheckoutOtionsComponent();
    }

    get billingDetails () {
        return new BillingDetailsComponent();
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