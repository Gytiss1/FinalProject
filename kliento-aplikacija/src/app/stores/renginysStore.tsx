import { makeObservable, observable } from "mobx";

export default class RenginysStore {
    title = 'Hello';

    constructor() {
        makeObservable(this, {
            title: observable
        })
        
    }
}