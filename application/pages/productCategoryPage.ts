import {ProductCartComponent} from './components/productCard.component';

export class ProductCategoryPage {

    open(url: string) {
        browser.url(url);
        browser.pause(3000);
    }

    get products(): ProductCartComponent[]{
        return $$('div.product-layout').map((elem: WebdriverIO.Element) => {
            return new ProductCartComponent(elem);
        });
    }

    get successIcon() {
        return $('i.fa.fa-check-circle');
    }

    linkComparePage() {
        return $('div.alert-success a:nth-child(3)').getText();
    }
}
