import { App } from "../../../application/application";
import *as faker from 'faker';

describe("Product return", function() {

    it("can be submited", function() {
        const app = new App();
        app.returnPage.open();

        app.returnPage.productReturnForm.submitFormWithoutDate({
            firstName: faker.name.findName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber(),
            orderId: faker.random.uuid(),
            productName: faker.commerce.product(),
            productCode:  faker.commerce.productAdjective(),
            comment: faker.lorem.sentence(22),
        });
        expect(browser).toHaveUrlContaining('/return/success', {
            message: 'Expected to have "/success" in the URL after submitting the form'});
    });

});
