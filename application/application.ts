import { ConfirmationPage } from "./pages/checkoutPages/confirmation.page";
import { CheckoutPage } from "./pages/checkoutPages/index";
import { HomePage } from "./pages/home/home.page";
import { ProductCategoryPage } from "./pages/productCategory.page";
import { ReturnPage } from "./pages/return/return.page";
import {RegisterAccountPage} from "./pages/registerAccount&login/registerAccount.page";
import { CertificatePage } from "./pages/certificate/certificate.page";
import { ContactUsPage } from "./pages/contactUs.page";
import { SearchResultPage } from "./pages/search/searchResult.page";
import { CheckoutCartPage } from "./pages/checkoutCart/checkoutCart.page";
import { ProductPage } from "./pages/productPage/product.page";

export class App {
    home: HomePage
    productCategory: ProductCategoryPage
    checkout: CheckoutPage
    confirmation: ConfirmationPage
    registerAccount: RegisterAccountPage
    returnPage: ReturnPage
    certificatePage: CertificatePage
    contactUsPage: ContactUsPage
    searchResulsPage: SearchResultPage
    checkoutCartPage: CheckoutCartPage
    productPage: ProductPage

    constructor(){
        this.home = new HomePage();
        this.productCategory = new ProductCategoryPage();
        this.checkout = new CheckoutPage();
        this.confirmation = new ConfirmationPage();
        this.registerAccount = new RegisterAccountPage();
        this.returnPage = new ReturnPage();
        this.certificatePage = new CertificatePage();
        this.contactUsPage = new ContactUsPage();
        this.searchResulsPage = new SearchResultPage();
        this.checkoutCartPage = new CheckoutCartPage();
        this.productPage = new ProductPage();
    }

}
