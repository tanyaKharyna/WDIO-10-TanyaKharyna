export class SuccessMessageComponent {

    private get root() :WebdriverIO.Element {
        return $('div.alert.alert-success');
    }

    get linkToWishlist() {
        return this.root.$('a[href*="wishlist"]');
    }

    get linkToComparePage() {
        return this.root.$('a[href*="compare"]');
    }

    get linkToCart() {
        return this.root.$('a[href*="checkout/cart"]');
    }

    get sucessIcon() {
        const successIcon = this.root.$('i.fa.fa-check-circle');
        expect(successIcon).toBeDisplayed({message: 'Expected Success icon to be displayed'});
        return successIcon;
    }

    goToWishlistFromMessage() {
        expect(this.linkToWishlist).toBeDisplayed({message: '[Success Message]: Expected link to Wishlist to be displayed'});
        this.linkToWishlist.click();
    }

    goToComparePageFromMessage() {
        expect(this.linkToComparePage).toBeDisplayed({message: '[Success Message]: Expected link to Compare page to displayed'});
        this.linkToComparePage.click();
    }

    goToCartFromMessage() {
        expect(this.linkToCart).toBeDisplayed({message: '[Success Message]: Expected link to Cart to displayed'});
        this.linkToCart.click();
    }

}
