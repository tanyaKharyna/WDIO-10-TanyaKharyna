import { SuccessMessageComponent } from "../components/sucessMessage.component";
import { RequiredInputFromUserComponent } from "./components/requiredInputFromUser.component";

export class ProductPage {


    get successMessage() {
        return new SuccessMessageComponent();
    }

    get requiredInputFromUser() {
        return new RequiredInputFromUserComponent();
    }

    setQuantity(quantity: number | string ) {
        const quantityField = $('input#input-quantity');
        expect(quantityField).toBeVisible({
            message: '[Product page]: Expected Quantity input to be shown'
        });
        quantityField.setValue(quantity);
    }

    continue() {
        const addToCartButton = $('button#button-cart');
        expect(addToCartButton).toBeClickable({
            message: '[Product Page]: Expected Add to cart button to be visible'
        });
        addToCartButton.click();
    }


}
