import { App } from "../../application/application";
import {ExecuteJsScripts} from "../../utils/executeJS.script";
import *as faker from 'faker';
import { ApiClient } from "../../utils/apiRequests/apiClient";

describe("Items search", function() {

    it.only("should register user with JS script", function() {
        const app = new App();
        app.registerAccount.open();

        const user = new ExecuteJsScripts().registerUserWithScript({firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            telephone: faker.phone.phoneNumber(),
            password: faker.internet.password(),
            acceptTermsAndConditions: true,});
        browser.pause(9000);
        console.log('User was created: ', user);

    });


    it.skip('ghlkvhj', function() {
        const app = new App();
        app.contactUsPage.open();
        app.contactUsPage.submitForm({
            name: faker.name.firstName(),
            email: faker.internet.email(),
            message: faker.lorem.paragraph(1),
        });
        expect(browser).toHaveUrlContaining('/contact/success');
    });

    it('api', function() {

        browser.url('/');

        const user = new ApiClient().createNewUser();
        browser.pause(10000);

        browser.url('/index.php?route=account/login');

        $('input#input-email').setValue(user.email);
        $('input#input-password').setValue('123456');

        $('input[value="Login"]').click();

        browser.pause(10000);
    });
});
