import { App } from "../../application/application";

describe("Items search", function() {
    it("should show results in case multiple items matches", function() {
        const app = new App();

        const searchStr = 'Mac';
        app.home.searchBar.search(searchStr);

        app.searchResulsPage.itemsFound.checkSearchResultIsCorrect(searchStr);
    });

    it("should redirect to 'no matching results' in case no items matched", function() {
        const app = new App();

        const searchStr = 'non existent name';
        app.home.searchBar.search(searchStr);

        app.searchResulsPage.itemsFound.checkSearchResultIsEmpty();

    });

});
