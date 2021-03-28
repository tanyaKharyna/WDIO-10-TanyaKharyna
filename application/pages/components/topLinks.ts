export class TopLinks {
    private get root(): WebdriverIO.Element {
        return $('nav#top');
    }

    openCheckout() {
        const link = this.root.$('a[title="Checkout"]');
        expect(link).toBeDisplayed();
        link.click();
    }

    openSignUpPage() {
        const userIcon = this.root.$('i.fa.fa-user');
        expect(userIcon).toBeDisplayed();
        userIcon.click();
        $('=Register').click();
    }

    openLoginPage() {
        const userIcon = this.root.$('i.fa.fa-user');
        expect(userIcon).toBeDisplayed();
        userIcon.click();
        $('=Login').click();
    }
}
