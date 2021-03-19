import { ReasonsReturnComponent } from "./reasonsForReturn.component";

export class ReturnFormComponent {


    private get root(): WebdriverIO.Element {
        return $('#content');
    }

    get returnReasons(){
        return  new  ReasonsReturnComponent();
    }


    setFirstName(value: string){
        this.root.$('#input-firstname').setValue(value);
    }
    setLastName(value: string){
        this.root.$('#input-lastname').setValue(value);
    }
    setEmail(value: string){
        this.root.$('#input-email').setValue(value);
    }
    setPhone(value: string){
        this.root.$('#input-telephone').setValue(value);
    }
    setOrderId(value: string){
        this.root.$('#input-order-id').setValue(value);
    }
    setProductName(value: string){
        this.root.$('#input-product').setValue(value);
    }

    setProductCode(value: string){
        this.root.$('#input-model').setValue(value);
    }

    setComment(value: string){
        this.root.$('#input-comment').setValue(value);
    }


    setOrderDate(){
        throw new Error ('NOT IMPLEMENTED');
    }

    continue() {
        const continueButton = this.root.$('input[type="submit"][value="Submit"]');
        expect(continueButton).toBeClickable({ message: 'Expected Continue button to be clickable' });
        continueButton.click();
    }

    submitFormWithoutDate(data: {
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        orderId: string,
        productName: string,
        productCode: string,
        comment: string
    }){
        console.log('[ProductReturnFormComponent] Filling the return form', JSON.stringify(data, null, 2));
        this.setFirstName(data.firstName);
        this.setLastName(data.lastName);
        this.setEmail(data.email);
        this.setPhone(data.phone);
        this.setOrderId(data.orderId);
        this.setProductName(data.productName);
        this.setProductCode(data.productCode);
        this.returnReasons.orderError();
        this.setComment(data.comment);
        browser.pause(6000);
        this.continue();
    }
}
