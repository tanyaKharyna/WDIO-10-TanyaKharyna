import *as faker from 'faker';
import { App } from '../../../application/application';

describe('REGISTERED USERS can add items to the cart, the comparison, the wishlish', function() {
    
    beforeEach(function(){
        const app = new App();
        app.registerAccount.open();
        app.registerAccount.registerAccountComponent.registerAccount({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            telephone: faker.phone.phoneNumber(),
            password: faker.internet.password()  
        });
    })

        it('can be added to wishlist', function () {
            const app = new App();
            app.home.openAllForCategory('MP3 Players');
            const ipodNano= app.productCategory.products.find(product => product.title() === 'iPod Nano');
            expect(ipodNano).toBeDefined();

            ipodNano.addToWishlist();
            expect(app.productCategory.successIcon).toBeDisplayed();

        });

        it('can be selected for comparison by registered user', function () {
            const app = new App();
            app.home.openAllForCategory('MP3 Players');
            const ipodNano= app.productCategory.products.find(product => product.title() === 'iPod Nano');
            expect(ipodNano).toBeDefined();

            ipodNano.compareThisProduct();
            expect(app.productCategory.successIcon).toBeDisplayed();
        });

        it('can be added to cart by registered user', function () {
            const app = new App();
            app.home.openAllForCategory('MP3 Players');
            const ipodNano= app.productCategory.products.find(product => product.title() === 'iPod Nano');
            expect(ipodNano).toBeDefined();

            ipodNano.addToCart();
            expect(app.productCategory.successIcon).toBeDisplayed();
        });
});

describe('GUESTS can add items to the cart, the comparison, the wishlish', function() {
 
        it('can be selected for comparison by guest', function () {
            const app = new App();
            app.home.openAllForCategory('MP3 Players');
            const ipodClassic = app.productCategory.products.find(product => product.title() === 'iPod Classic');
            expect(ipodClassic).toBeDefined();

            ipodClassic.compareThisProduct();
            expect(app.productCategory.successIcon).toBeDisplayed();
        });

        it('can be added to cart by guest', function () {
            const app = new App();
            app.home.openAllForCategory('MP3 Players');

            const ipodNano= app.productCategory.products.find(product => product.title() === 'iPod Nano');
            expect(ipodNano).toBeDefined();

            ipodNano.addToCart();
            expect(app.productCategory.successIcon).toBeDisplayed();
        });
})