import { Touchscreen } from "../../../../node_modules/puppeteer-core/lib/cjs/puppeteer/common/Input";

export class CerfiticateFormComponent {

    private get root(): WebdriverIO.Element{
        return $('#content')
    } 

    

    continue() {
        browser.pause(500)
        const continueButton = this.root.$('input[type="submit"][value="Continue"]');
        expect(continueButton).toBeClickable({ message: 'Expected Continue button to be visible' });
        continueButton.click();
    }

    getAllCertificateTheme() {
        return $$('input[type="radio"][name="voucher_theme_id"]');
    }

    chooseBirthdayTheme(){
        return this.getAllCertificateTheme()[0].click();
    }

    chooseCristmasTheme(){
        return this.getAllCertificateTheme()[1].click();
    }

    chooseGeneralTheme(){
        return this.getAllCertificateTheme()[0].click();
    }

    submitForm(data: {
        recipientsName: string,
        recipientEmail: string,
        sendersName: string,
        sendersEmail: string,
        message: string,    
    }){
        console.log('[CertificateFormComponent] Generating data to order a certificate', JSON.stringify(data, null, 2));
        this.root.$('#input-to-name').setValue(data.recipientsName);
        this.root.$('#input-to-email').setValue(data.recipientEmail);
        this.root.$('#input-from-name').setValue(data.sendersName);
        this.root.$('#input-from-email').setValue(data.sendersEmail);
        this.root.$('#input-message').setValue(data.message);
        this.root.$('input[name="agree"]').click();
        this.chooseBirthdayTheme();
        browser.pause(5000);
        this.continue();
    }

   
}
