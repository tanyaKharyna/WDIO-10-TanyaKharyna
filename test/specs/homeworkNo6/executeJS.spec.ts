import { App } from "../../../application/application";
import {registerUserWithScript} from "../../../utils/registerUser.script";
import *as faker from 'faker';

describe("Items search", function() {

    it.only("should register user with JS script", function() {
        const app = new App();
        app.registerAccount.open();
        registerUserWithScript({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            telephone: faker.phone.phoneNumber(),
            password: faker.internet.password(),
            acceptTermsAndConditions: true,
        });
        browser.pause(9000);

    });

});
