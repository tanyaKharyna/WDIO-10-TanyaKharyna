import { App } from "../../application/application";

describe("Items search", function() {
    it("should show results in case multiple items matches", function() {
        const app = new App();

        const searchStr = 'Mac';
        app.home.searchBar.search(searchStr);

        app.searchResulsPage.itemsFound.checkSearchResultIsCorrect(searchStr);
        app.searchResulsPage.itemsFound.results.forEach(result => {
            expect(result).toHaveTextContaining(searchStr, {
                message: `[Search Results]: Expected fo find ${searchStr} in all search results`});
        });
    });

    it("should redirect to 'no matching results' in case no items matched", function() {
        const app = new App();

        const searchStr = 'non existent name';
        app.home.searchBar.search(searchStr);

        app.searchResulsPage.itemsFound.checkSearchResultIsEmpty();
        expect(app.searchResulsPage.itemsFound.results).toBeElementsArrayOfSize(0, {
            message : '[Search Results]: Expected to receive 0 search results'
        });
    });

});
