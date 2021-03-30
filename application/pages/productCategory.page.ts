import { ElementHandle } from '../../node_modules/puppeteer-core/lib/cjs/puppeteer/common/JSHandle';
import {ProductCardComponent} from './components/productCard.component';
import { SuccessMessageComponent } from './components/sucessMessage.component';

export class ProductCategoryPage {

    open(url: string) {
        browser.url(url);
    }


    get products(): ProductCardComponent[]{
        return $$('div.product-layout').map((elem: WebdriverIO.Element) => {
            return new ProductCardComponent(elem);
        });
    }


    get successMessage() {
        return new SuccessMessageComponent();
    }

    productFrom(arr: any[]): ProductCardComponent[]{
        return arr.find((elem: WebdriverIO.Element) => {
            return new ProductCardComponent(elem);
        });
    }
}
