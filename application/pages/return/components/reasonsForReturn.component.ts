export class ReasonsReturnComponent {

    get root(): WebdriverIO.Element {
        return $$('input[type="radio"][name="return_reason_id"]');
    }

    deadOnArrival(){
        return this.root[0].click();
    }
        
    faulty(){
        return this.root[1].click();
    }

    orderError(){
        return this.root[2].click();
    }
        
    otherReason(){
        return this.root[3].click();
    }
    
    receivedWrongItem(){
        return this.root[4].click();
    }
} 