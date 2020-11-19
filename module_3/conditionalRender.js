import { LightningElement } from 'lwc';
export default class ConditionalRender extends LightningElement {
    showTom = false;
    showjerryclick(){
        this.showTom = true;
    }
    showTomclick(){
        this.showTom = false;
    }

}