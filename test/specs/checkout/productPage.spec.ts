import { App } from "../../../application/application";
import { itemsForSale } from "../../../data/itemsForSale";
const path = require('path');


describe('Product page should work as expected', function() {

    it('should add to cart if user selected required options during checkout ', function() {
        const app = new App();

        app.home.openCategory(itemsForSale[10].category);

        const canonEOS5D = app.productCategory.products.find(product => product.title() ===  itemsForSale[10].name);
        expect(canonEOS5D).toBeDefined();
        canonEOS5D.addToCart();

        app.productPage.requiredInputFromUser.selectOptionByVisibleText(itemsForSale[10].activeOption);
        app.productPage.continue();

        expect(app.productPage.successMessage.linkToCart).toBeVisible();
        expect(app.productPage.successMessage.linkToCart).toBeClickable();
    });


    it('should show error "Select required!" if no option was chosen during checkout', function() {
        const app = new App();

        app.home.openCategory(itemsForSale[10].category);

        const canonEOS5D = app.productCategory.products.find(product => product.title() ===  itemsForSale[10].name);
        expect(canonEOS5D).toBeDefined();
        canonEOS5D.addToCart();

        app.productPage.continue();

        expect(app.productPage.requiredInputFromUser.isErrorShown());
    });


    it('should allow file upload by customer', function() {
        const app = new App();

        app.home.openCategory(itemsForSale[11].category);

        const appleCinema30 = app.productCategory.products.find(product => product.title() ===  itemsForSale[11].name);
        expect(appleCinema30).toBeDefined();
        appleCinema30.addToCart();

        app.productPage.requiredInputFromUser.chooseSmallSize();
        app.productPage.requiredInputFromUser.setText('bla bla bla');
        app.productPage.requiredInputFromUser.selectOptionByValue('3');

        const filePath = path.join(__dirname, '../../../data/image1.jpg');
        app.productPage.requiredInputFromUser.uploadFile(filePath);


        app.productPage.continue();
        expect(app.productCategory.successMessage.linkToCart).toBeDisplayed();

    });

});
