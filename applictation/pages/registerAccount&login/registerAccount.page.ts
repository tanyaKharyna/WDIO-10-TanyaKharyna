import { RegisterAccountComponent } from "./components/registerAccount.component";

export class RegisterAccountPage {
    
    open() {
        browser.url('/index.php?route=account/register')
    }

    get registerAccountComponent () {
        return new RegisterAccountComponent();
    }
}