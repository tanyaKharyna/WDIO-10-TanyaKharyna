import { Touchscreen } from "../../node_modules/puppeteer-core/lib/cjs/puppeteer/common/Input";

export class ContactUsPage {

    open(){
        browser.url('index.php?route=information/contact');
    }

    /** 
     * @todo: Rewrite code below as PageComponent 
     */
    
    get root() {
        return $('#content');
    }

    submitForm(data: {
        name: string,
        email: string,
        message: string,
    }) {
        this.root.$('#input-name').setValue(data.name);
        this.root.$('#input-email').setValue(data.email);
        this.root.$('#input-enquiry').setValue(data.message);
        this.root.$('input[type="submit"][value="Submit"]').click();
    }
}