import { SearchBarComponent } from "../components/searchBar.component";
import { TopLinks } from "../components/topLinks";

export class HomePage {
    topLinks: TopLinks = new TopLinks()
    searchBar: SearchBarComponent = new SearchBarComponent()
    //searchBar: SearchBarComponent = new SearchBarComponent()

    openAllForCategory(categoryName: string) {
        $(`a=${categoryName}`).click()

        const openedSeeAllLink = $('.dropdown.open .see-all')
        expect(openedSeeAllLink).toBeVisible()

        openedSeeAllLink.click()
    }
}