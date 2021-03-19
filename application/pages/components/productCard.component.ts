export class ProductCartComponent {

    constructor(private root: WebdriverIO.Element){
    }

    title() {
        return this.root.$('h4').getText();
    }

    addToCart() {
        const addCartButton = this.root.$('button[onclick*="cart.add"] i.fa-shopping-cart');
        expect(addCartButton).toBeVisible({message: 'Expected to see the Add to button cart'});
        addCartButton.click();
    }

    addToWishlist(){
        const addCWishlistButton = this.root.$('button[onclick*="wishlist.add"] i.fa.fa-heart');
        expect(addCWishlistButton).toBeVisible({message: 'Expected to see the Add to wishlist cart'});
        addCWishlistButton.click();
    }

    compareThisProduct(){
        const compareButton = $('button[onclick*="compare.add"] i.fa.fa-exchange');
        expect(compareButton).toBeVisible({message: 'Expected to see the Compare button'});
        compareButton.click();
    }

    continue() {
        browser.pause(500);
        const checkoutButton = $('div.pull-right a');
        expect(checkoutButton).toBeClickable({ message: 'Expected Continue button to be visible' });
        checkoutButton.click();
    }
}
