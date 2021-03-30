import { App } from "../../../application/application";
import { itemsForSale } from "../../../data/itemsForSale";
import*as faker from 'faker';
const path = require('path');


describe('Product page should work as expected', function() {

    it.only('should add to cart if user selected required options during checkout ', function() {
        const app = new App();
        const canonEOS5D = itemsForSale.find(item => item.name === 'Canon EOS 5D');

        app.home.openCategory(canonEOS5D.category);

        const itemToAdd = app.productCategory.products.find(product => product.title() ===  canonEOS5D.name);
        expect(itemToAdd).toBeDefined();
        itemToAdd.addToCart();

        app.productPage.requiredInputFromUser.selectOptionByVisibleText(canonEOS5D.activeOption);
        app.productPage.continue();

        expect(app.productPage.successMessage.linkToCart).toBeClickable(
            {message: '[Product Page]: Expected link to the cart from the success message to be visible and clickable'
            });
    });


    it('should show error "Select required!" if no option was chosen during checkout', function() {
        const app = new App();
        const canonEOS5D = itemsForSale.find(item => item.name === 'Canon EOS 5D');

        app.home.openCategory(canonEOS5D.category);

        const itemToAdd = app.productCategory.products.find(product => product.title() ===  canonEOS5D.name);
        expect(itemToAdd).toBeDefined();
        itemToAdd.addToCart();

        app.productPage.continue();

        expect(app.productPage.requiredInputFromUser.isErrorShown());
    });

    it('should allow file upload by customer', function() {
        const app = new App();
        const canonEOS5D = itemsForSale.find(item => item.name === 'Canon EOS 5D');

        app.home.openCategory(canonEOS5D.category);

        const itemToAdd = app.productCategory.products.find(product => product.title() ===  canonEOS5D.name);
        expect(itemToAdd).toBeDefined();
        itemToAdd.addToCart();

        app.productPage.requiredInputFromUser.chooseSmallSize();
        app.productPage.requiredInputFromUser.setText(faker.lorem.word(5));
        app.productPage.requiredInputFromUser.selectOptionByValue('3');

        const filePath = path.join(__dirname, '../../../data/image1.jpg');
        app.productPage.requiredInputFromUser.uploadFile(filePath);

        app.productPage.continue();
        expect(app.productCategory.successMessage.linkToCart).toBeDisplayed(
            {message: '[Product Page]: Expected link to the cart from the success message to be visible and clickable'});
    });

});
