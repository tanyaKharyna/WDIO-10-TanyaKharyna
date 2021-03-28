export class TotalAmountComponent {

    private get root(): WebdriverIO.Element {
        return $('#content div.row table tbody');
    }


    get subTotal(): string {
        return this.root.$('tr:nth-child(1) > td:nth-child(2)').getText();
    }

    get ecoTax(): string {
        return this.root.$('tr:nth-child(2) > td:nth-child(2)').getText();
    }

    get getVAT(): string {
        return this.root.$('tr:nth-child(3) > td:nth-child(2)').getText();
    }

    get total(): string {
        return this.root.$('tr:nth-child(4) > td:nth-child(2)').getText();
    }

    getNumericTotal(): number{
        return Number(this.total.replace('$', ''));
    }
}
