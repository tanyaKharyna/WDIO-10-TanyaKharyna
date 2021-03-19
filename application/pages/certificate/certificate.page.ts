import { CerfiticateFormComponent } from "./components/certificateForm.component";

export class CertificatePage{

    open(){
        browser.url('index.php?route=account/voucher');
    }

    certificateForm = new CerfiticateFormComponent();

}
