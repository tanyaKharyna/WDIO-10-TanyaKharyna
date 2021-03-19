export class RegisterAccountComponent {

    private get root(): WebdriverIO.Element{
        return $('#content');
    }

    continue() {
        browser.pause(500);
        const continueButton = this.root.$('input[type="submit"][value="Continue"]');
        expect(continueButton).toBeClickable({ message: 'Expected Continue button to be visible' });
        continueButton.click();
    }

    registerAccount(data: {
        firstName: string,
        lastName: string,
        email: string,
        telephone: string,
        password: string
    }){
        console.log('[RegisterAccountComponent] Generating data to create an account', JSON.stringify(data, null, 2));
        this.root.$('#input-firstname').setValue(data.firstName);
        this.root.$('#input-lastname').setValue(data.lastName);
        this.root.$('#input-email').setValue(data.email);
        this.root.$('#input-telephone').setValue(data.telephone);
        this.root.$('#input-password').setValue(data.password);
        this.root.$('#input-confirm').setValue(data.password);
        this.root.$('[name="agree"]').click();
        this.continue();
    }
}
