import * as faker from 'faker';

/*
* Array "indexesOfItems" should include indexes of items for sale that we want to include in the tests.
* Functions in the suite below will use the provided indexes to click on the elements of specific elements.
*/
const indexesOfItems = [1, 2, 3, 4];

indexesOfItems.map(data => {
    describe('REGISTERED USERS can add items to the cart, the comparison, the wishlish', function () {

        before(function() {
            browser.url('/index.php?route=account/login');
            browser.setWindowSize(1920, 1080);
            const content = $('#content');

            const signupBtn = content.$('=Continue');
            signupBtn.click();

            const firstName = content.$('#input-firstname');
            firstName.setValue(faker.name.firstName());

            const lastName = content.$('#input-lastname');
            lastName.setValue(faker.name.lastName());

            const email = content.$('#input-email');
            email.setValue(faker.internet.email());

            const phone = content.$('#input-telephone');
            phone.setValue(faker.phone.phoneNumber());

            const passwordStr = faker.internet.password();
            const password = content.$('#input-password');
            const passwordConfirm = content.$('#input-confirm');
            password.setValue(passwordStr);
            passwordConfirm.setValue(passwordStr);

            const agree = content.$('[name="agree"]');
            agree.click();

            const continueButton = content.$('[value="Continue"]');
            continueButton.click();
            browser.setWindowSize(1920, 1080);
        });

        after(function(){
            browser.reloadSession();
        });


        it(`item with index No.${data} can be added to wishlist`, function() {
            function addToWishlistByIndex(data:number) {
                browser.url('/mp3-players');
                const productThumb = $(`div:nth-child(8) div.product-layout:nth-child(${data})`);
                const addwishlishBtn = productThumb.$('[data-original-title="Add to Wish List"]');
                addwishlishBtn.click();
            }
            addToWishlistByIndex(data);

            const totalWishlistItems = $('#wishlist-total span');
            const successIcon = $('i[class="fa fa-check-circle"]');
            const sucessMsg = $('div.alert-success');

            expect(sucessMsg).toBeDisplayed({message: 'Success message was not displayed'});
            expect(successIcon).toBeDisplayed({message: 'Success icon was not displayed'});
            expect(totalWishlistItems).not.toHaveText('Wish List (0)', { message: `Text on the wishListLabel didn't matched, received ${totalWishlistItems.getText()}`});
        });


        it(`item with index No.${data} can be selected for comparison by registered user`, function() {
            function compareItemsByIndex(data:number) {
                browser.url('/mp3-players');
                const productThumb = $(`div:nth-child(8) div.product-layout:nth-child(${data})`);
                const compareBtn = productThumb.$('[data-original-title="Compare this Product"]');
                compareBtn.click();
            }
            compareItemsByIndex(data);
            const successIcon = $('i[class="fa fa-check-circle"]');
            const linkToComparisonPage = $('div.alert-success a:nth-child(3)');
            const compareTotal = $('#compare-total');

            expect(successIcon).toBeDisplayed({ message: 'Success icon was not displayed'});
            expect(linkToComparisonPage).toHaveText('product comparison', { message: `Incorrect path in the sucess message, received ${linkToComparisonPage.getText()}`} );
            expect(compareTotal).not.toHaveTextContaining('Product Compare (0)',{ message: `Text on the compareLabel didn't matched, received ${compareTotal.getText()}`});
        });


        it(`item No. ${data} can be added to cart by registered user`, function() {
            function addToCartByIndex(data:number) {
                browser.url('/mp3-players');
                const productThumb = $(`div:nth-child(8) div.product-layout:nth-child(${data})`);
                const cartBtn = productThumb.$('button:nth-of-type(1)');
                cartBtn.click();
            }
            addToCartByIndex(data);

            const sucessMsg = $('div.alert-success');
            const cartTotal = $('#cart-total');
            expect(sucessMsg).toBeDisplayed({message: 'Sucess message was not displayed'});
            expect(cartTotal).not.toHaveTextContaining('0 item(s) - $0.00', {message: `Text on the cart was not correct,  received ${cartTotal.getText()}`});      });
    });
});

describe('GUESTS can add items to cart, comparison, wishlish', function(){

    beforeEach(function(){
        browser.url('/mp3-players');
        browser.setWindowSize(1920, 1080);
    });

    /**
     * Functions in tests click on the elements based on the index of item provided
     * @param {number} index the index of the element for sale
     */

    it('can be selected for comparison by guest', function () {
        function addToCartByIndex(index: number) {
            const productThumb = $(`div:nth-child(8) div.product-layout:nth-child(${index})`);
            const compareBtn = productThumb.$('[data-original-title="Compare this Product"]');
            compareBtn.click();
        }

        addToCartByIndex(3);

        const successIcon = $('i[class="fa fa-check-circle"]');
        const linkToComparisonPage = $('div.alert-success a:nth-child(3)');
        const compareTotal = $('#compare-total');

        expect(successIcon).toBeDisplayed({message: 'Success icon was not displayed'});
        expect(linkToComparisonPage).toHaveText('product comparison', { message: `Incorrect path in the sucess message, received ${linkToComparisonPage.getText()}`} );
        expect(compareTotal).not.toHaveTextContaining('Product Compare (0)',{ message: `Text on the compareLabel didn't matched, received ${compareTotal.getText()}`});
    });

    it('can be added to cart by guest', function () {
        function addToCartByIndex(index:number) {
            const productThumb = $(`div:nth-child(8) div.product-layout:nth-child(${index})`);
            const cartBtn = productThumb.$('button:nth-of-type(1)');
            cartBtn.click();
        }
        addToCartByIndex(2);

        const sucessMsg = $('div.alert-success');
        const cartTotal = $('#cart-total');
        expect(sucessMsg).toBeDisplayed({message: 'Sucess message was not displayed'});
        expect(cartTotal).not.toHaveTextContaining('0 item(s) - $0.00', {message: `Text on the cart was not correct,  received ${cartTotal.getText()}`});
    });
});
