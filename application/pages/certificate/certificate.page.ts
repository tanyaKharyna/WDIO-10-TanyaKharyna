import { BrowserContext } from "../../../node_modules/puppeteer-core/lib/cjs/puppeteer/common/Browser";
import { ReturnFormComponent } from "../return/components/returnForm.component";
import { CerfiticateFormComponent } from "./components/certificateForm.component";

export class CertificatePage{
    
    open(){
        browser.url('index.php?route=account/voucher');
    }

    get certificateForm() {
        return new CerfiticateFormComponent();
    }
    
}