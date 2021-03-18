export class TopLinks {
    private get root(): WebdriverIO.Element {
        return $('nav#top')
    }

    openCheckout() {
        this.root.$('a[title="Checkout"]').click()
        browser.pause(1000)
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