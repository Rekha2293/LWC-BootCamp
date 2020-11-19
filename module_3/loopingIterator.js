import { LightningElement } from 'lwc';

export default class LoopingIterator extends LightningElement {
    contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Email: 'at@dell.com',
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Email: 'Mj@dell.com',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Email: 'jw@dell.com',
        },
    ];
}