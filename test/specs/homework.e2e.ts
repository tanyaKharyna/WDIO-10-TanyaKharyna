import * as faker from 'faker';

describe("Product return", function() {
    it("can be submited", function() {
        const url = '/index.php?route=account/return/add';
        browser.url(url);

        const content = $('#content');

        const firstName = content.$('#input-firstname');
        firstName.setValue(faker.name.firstName());

        const lastName = content.$('#input-lastname');
        lastName.setValue(faker.name.lastName());

        const email = content.$('#input-email');
        email.setValue(faker.internet.email());

        const phone = content.$('#input-telephone');
        phone.setValue(faker.phone.phoneNumber());

        const orderID= content.$('#input-order-id');
        const orderIdStr = Math.random.toString().slice(2,11);
        orderID.setValue(orderIdStr);

        const productName = content.$('#input-product');
        productName.setValue(faker.commerce.productName());

        const productCode = content.$('#input-model');
        productCode.setValue(faker.commerce.product());

        const reasonForReturn = $('input[type="radio"][value="2"]');
        reasonForReturn.click();

        const comment = content.$('#input-comment');
        comment.setValue(faker.lorem.sentence(22));

        const submitButton = content.$('[value="Submit"]');
        submitButton.click();

        const title = content.$('h1');

        expect(browser).toHaveUrlContaining('account/return/success');
        expect(title).toHaveText('Product Returns');
    });
});

// http://93.126.97.71:10082/index.php?route=account/voucher
// this test gives you 20 points
describe("Gift Certificate", function() {
    it("can be purchased", function() {
        const url = '/index.php?route=account/voucher';
        browser.url(url);

        const content = $('#content');

        const recipientsName = content.$('#input-to-name');
        recipientsName.setValue(faker.name.firstName());

        const recipientsEmail = content.$('#input-to-email');
        recipientsEmail.setValue(faker.internet.email());

        const sendersName = content.$('#input-from-name');
        sendersName.setValue(faker.name.firstName());

        const sendersEmail = content.$('#input-from-email');
        sendersEmail.setValue(faker.internet.email());

        const birthdayTheme = content.$('input[name="voucher_theme_id"][value="7"]');
        birthdayTheme.click();

        const message = content.$('#input-message');
        message.setValue(faker.lorem.sentence(7));

        const agreeCheckbox = content.$('input[name="agree"]');
        agreeCheckbox.click();

        const submitButton = content.$('input[type="submit"][value="Continue"]');
        submitButton.click();

        const text = $('p=Thank you for purchasing a gift certificate! Once you have completed your order your gift certificate recipient will be sent an e-mail with details how to redeem their gift certificate.');
        const title = content.$('h1');

        expect(browser).toHaveUrlContaining('account/voucher/success');
        expect(title).toHaveText('Purchase a Gift Certificate');
        expect(text).toExist();
    });
});

// this test gives you 20 points
// http://93.126.97.71:10082/index.php?route=information/contact
describe("Contact us form", function() {
    it("must send messages to shop administration", function() {
        browser.url('/index.php?route=information/contact');

        const content = $('#content');

        const name = content.$('#input-name');
        name.setValue(faker.name.firstName());

        const email = content.$('#input-email');
        email.setValue(faker.internet.email());

        const enquiry = content.$('#input-enquiry');
        enquiry.setValue(faker.lorem.paragraph(1));

        const submitButton = $('input[type="submit"][value="Submit"]');
        submitButton.click();

        const title = content.$('h1');
        const breadcrumbContactUs = $('=Contact Us');

        expect(browser).toHaveUrlContaining('information/contact/success');
        expect(title).toHaveText('Contact Us');
        expect(breadcrumbContactUs).toExist();
    });
});

describe("Items search", function() {
    it("should show results in case multiple items matches", function() {
        browser.url('/');

        const header = $('header');
        const searchBar= header.$('[name="search"]');
        const searchStr = 'Mac';
        searchBar.setValue(searchStr);

        const searchBtn = header.$('.input-group-btn button');
        searchBtn.click();

        const results = $$('h4 a');
        expect(results).toHaveTextContaining(searchStr);
        // expect(browser.getUrl()).toContain(searchStr);
    });

    it("should redirect to 'no matching results' in case no items matched", function () {
        browser.url('/');

        const header = $('header');

        const searchBar= header.$('[name="search"]');
        const searchStr = 'mon-existed producr';
        searchBar.setValue(searchStr);

        const searchBtn = header.$('.input-group-btn button');
        searchBtn.click();

        const noResultsMsg = $('p=There is no product that matches the search criteria.');
        expect(noResultsMsg).toBeDisplayed();
    });
});
