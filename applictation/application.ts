import { ConfirmationPage } from "./pages/checkoutPages/confirmation.page";
import { CheckoutPage } from "./pages/checkoutPages/index";
import { HomePage } from "./pages/home/home.page";
import { ProductCategoryPage } from "./pages/productCategoryPage";
import {RegisterAccountPage} from "./pages/registerAccount&login/registerAccount.page";

export class App {
    home: HomePage
    productCategory: ProductCategoryPage
    checkout: CheckoutPage
    confirmation: ConfirmationPage
    registerAccount: RegisterAccountPage

    constructor(){
        this.home = new HomePage()
        this.productCategory = new ProductCategoryPage()
        this.checkout = new CheckoutPage()
        this.confirmation = new ConfirmationPage()
        this.registerAccount = new RegisterAccountPage()
    }

}