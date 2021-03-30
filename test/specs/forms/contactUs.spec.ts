import * as faker from "faker";
import { App } from "../../../application/application";

describe("Contact us form", function() {

    it("must send messages to shop administration", function() {
        const app = new App();
        app.contactUsPage.open();
        app.contactUsPage.submitForm({
            name: faker.name.firstName(),
            email: faker.internet.email(),
            message: faker.lorem.paragraph(1),
        });
        expect(browser).toHaveUrlContaining('/contact/success', {
            message: 'Expected to have "/success" in the URL after submitting the form'});
    });

});
