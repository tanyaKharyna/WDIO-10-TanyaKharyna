import { App } from "../../../application/application";
import *as faker from 'faker';

describe("Product return", function() {
    it("can be submited", function() {
        const app = new App();
        app.returnPage.open();

        app.returnPage.productReturnForm.submitFormWithoutDate({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber(),
            orderId: faker.random.uuid(),
            productName: faker.commerce.product(),
            productCode:  faker.commerce.productAdjective(),
            comment: faker.lorem.sentence(22),
        });
        expect(browser).toHaveUrlContaining('/return/success');
    });
});


describe("Gift Certificate", function() {
    it("can be purchased", function() {
        const app = new App();
        app.certificatePage.open();
        app.certificatePage.certificateForm.submitForm({
            recipientsName: faker.name.firstName(),
            recipientEmail: faker.internet.email(),
            sendersName: faker.name.firstName(),
            sendersEmail: faker.internet.email(),
            message: faker.lorem.sentence(22),
        } );

        const title = $('#content h1');
        expect(browser).toHaveUrlContaining('/voucher/success');
        expect(title).toHaveText('Purchase a Gift Certificate');
    });
});


describe("Contact us form", function() {
    it("must send messages to shop administration", function() {
        const app = new App();
        app.contactUsPage.open();
        app.contactUsPage.submitForm({
            name: faker.name.firstName(),
            email: faker.internet.email(),
            message: faker.lorem.paragraph(1),
        });
        expect(browser).toHaveUrlContaining('/contact/success');
    });
});
