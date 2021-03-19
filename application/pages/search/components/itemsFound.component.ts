export class ItemsFoundComponent {

    private get root(): WebdriverIO.Element {
        return $('#content');
    }

    checkSearchResultIsCorrect(searchStr: string) {
        const productThums = this.root.$$('.product-thumb h4');
        expect(productThums).toHaveTextContaining(searchStr, { wait: 2000 });

    }

    checkSearchResultIsEmpty() {
        const noResultsMsg = $("p=There is no product that matches the search criteria.");
        expect(noResultsMsg).toBeDisplayed({message: 'Expected "No results found" messsage to be visible'});
    }

}
