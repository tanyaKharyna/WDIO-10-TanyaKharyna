export class SearchBarComponent {

    private get root(): WebdriverIO.Element {
        return $('div#search');
    }

    search(text: string) {
        const searchInput = this.root.$('input[type="text"][name="search"]');
        expect(searchInput).toBeDisplayed({message: 'Expected Search bar to be visible'});
        const searchBtn = this.root.$(' button[type="button"] ');
        expect(searchBtn).toBeClickable({message: 'Expected Search button(in the Search bar) to be clickable'});

        searchInput.setValue(text);
        searchBtn.click();
    }
}
