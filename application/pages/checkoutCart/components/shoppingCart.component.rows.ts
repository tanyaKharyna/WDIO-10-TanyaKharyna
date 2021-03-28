export class ShoppingCartRowsComponent {

    private get root(): WebdriverIO.Element[] {
        return $$('#content form tbody tr');
    }
    get prices(): string [] {
        return this.root.map(row => row.$('.//td[5]').getText());
    }

    get numberOfProducts(): string [] {
        return this.root.map(row => row.$('input[name*=quantity]').getAttribute('value'));
    }

    get quantity(): number {
        return this.root.length;
    }

    get unitPriceItem() : string [] {
        return this.root.map(row => row.$('td:nth-of-type(5)').getText());
    }

    get totalPriceItem() : string [] {
        const prices = this.root.map(row => row.$('td:nth-of-type(5)').getText());
        return prices;
    }

    getExpectedTotal(...prices:string[]):number {
        let total = 0;
        prices.map((price: string) => {
            total +=  Number(price.replace('$', ''));
        });
        return total;
    }

}
