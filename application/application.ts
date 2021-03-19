import { ConfirmationPage } from "./pages/checkoutPages/confirmation.page";
import { CheckoutPage } from "./pages/checkoutPages/index";
import { HomePage } from "./pages/home/home.page";
import { ProductCategoryPage } from "./pages/productCategoryPage";
import { ReturnPage } from "./pages/return/return.page";
import {RegisterAccountPage} from "./pages/registerAccount&login/registerAccount.page";
import { CertificatePage } from "./pages/certificate/certificate.page";
import { ContactUsPage } from "./pages/contactUs.page";
import { SearchResultPage } from "./pages/search/searchResult.page";

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
    }

}
