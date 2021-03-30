export class RequiredInputFromUserComponent {

    /*
* Methods below applicable for items that require addionioal input
* from user for ordering (e.g., size, color. date of delivery)
*
*/

    private get root(): WebdriverIO.Element{
        return $('#content div.col-sm-4');
    }

    chooseSmallSize() {
        this.root.$('div.radio input[type=radio][value="5"]').click();
        this.root.$('input[type=checkbox][value="8"]').click();


    }

    setText(text: string ) {
        const textField = this.root.$('[placeholder="Textarea"]');
        expect(textField).toBeVisible({
            message: '[Product page]: Expected the input for Comment to be shown'
        });
        textField.setValue(text);
    }


    selectOptionByVisibleText(option: string) {
        browser.waitUntil(() => {
            try {
                this.root.$('#product div select').selectByVisibleText(option);
                return true;
            } catch {
                return false;
            }},
        { timeout: 3000,
            timeoutMsg:`[Product page]: Expected to select option "${option}" by visible text`
        });
    }
    selectOptionByValue(number: string) {
        browser.waitUntil(() => {
            try {
                this.root.$('#product div select').selectByAttribute('value', number);
                return true;
            } catch {
                return false;
            }},
        { timeout: 3000,
            timeoutMsg:`[Product page]: Expected to select option with "${number}"`
        });
    }

    isErrorShown(): boolean {
        return this.root.$('div=Select required!').isDisplayed({
            message: '[Product Page]: Expected the validation message to be visible if user did not provided all required info'});
    }


    uploadFile(pathToFile: string){
        const fileUpload = $('#input-option222');
        browser.execute(
            (el) => el.style.display = 'block',
            fileUpload
        );
        browser.uploadFile(pathToFile);
    }


}
