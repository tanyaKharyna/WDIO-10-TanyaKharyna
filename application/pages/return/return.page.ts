import { ReturnFormComponent } from "./components/returnForm.component";

export class ReturnPage {

    open(){
        browser.url('index.php?route=account/return/add');
    }

    get productReturnForm () {
        return new ReturnFormComponent();
    }

}
