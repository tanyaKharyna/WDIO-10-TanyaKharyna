import { SearchBarComponent } from "../components/searchBar.component";
import { ItemsFoundComponent } from "./components/itemsFound.component";

export class SearchResultPage {

    open() {
        browser.url('index.php?route=product/search');
    }

    searchBarComponent = new SearchBarComponent();

    itemsFound = new ItemsFoundComponent();

}
