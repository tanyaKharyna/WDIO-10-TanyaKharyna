import { SearchBarComponent } from "../components/searchBar.component";
import { TopLinks } from "../components/topLinks";

export class HomePage {
    topLinks: TopLinks = new TopLinks()
    searchBar: SearchBarComponent = new SearchBarComponent()

    openCategory(categoryName: string) {
        const categoryHeader = $(`a=${categoryName}`);
        browser.waitUntil(() => {
            try {
                categoryHeader.click();
                return true;
            } catch {
                return false;
            }},
        {   timeout: 2000,
            timeoutMsg: 'Expected to select category'
        });

    }

    openAllForCategory(categoryName: string) {
        const categoryHeader = $(`a=${categoryName}`);
        categoryHeader.click();
        const openedSeeAllLink = $('.dropdown.open .see-all');
        expect(openedSeeAllLink).toBeVisible();
        openedSeeAllLink.click();
    }
}
