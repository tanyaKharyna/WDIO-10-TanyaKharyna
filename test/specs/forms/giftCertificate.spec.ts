import * as faker from "faker";
import { App } from "../../../application/application";

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

        expect(browser).toHaveUrlContaining('/voucher/success', {
            message: 'Expected to have "/success" in the URL after submitting the form'});
    });

});
