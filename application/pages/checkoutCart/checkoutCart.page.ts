import { ShoppingCartRowsComponent } from "./components/shoppingCart.component.rows";
import { TotalAmountComponent } from "./components/totalAmount.component";

export class CheckoutCartPage {

    open () {
        browser.url('/index.php?route=checkout/cart');
    }

    get shoppingCart () {
        return new ShoppingCartRowsComponent();
    }

    get totalAmmount () {
        return new TotalAmountComponent();
    }

}
