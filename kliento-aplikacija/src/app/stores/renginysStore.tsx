import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { Renginys } from "../layout/models/renginys";

export default class RenginysStore {
    renginiai: Renginys[] = [];
    pasirinktasRenginys: Renginys | null = null;
    redagavimoRezimas = false;
    krovimasis = false;
    krovimasisPradinis = false;

    constructor() {
        makeAutoObservable(this)
    }

    uzkrautiRenginius = async () => {
        this.krovimasisPradinis = true;
        try {
            const renginiai = await agent.Renginiai.sarasas();
            renginiai.forEach(renginys => {
                renginys.data = renginys.data.split('T')[0];
                // antipatternas reduxui
                this.renginiai.push(renginys);
              })
              this.krovimasisPradinis = false;
        } catch (klaida) {
            console.log(klaida);
            this.krovimasisPradinis = false;
        }
    }
}