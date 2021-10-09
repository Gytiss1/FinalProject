import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Renginys } from "../layout/models/renginys";

export default class RenginysStore {
    // JS mappingas
    renginiuRegistras = new Map<string, Renginys>();
    pasirinktasRenginys: Renginys | undefined = undefined;
    redagavimoRezimas = false;
    krovimasis = false;
    krovimasisPradinis = true;

    constructor() {
        makeAutoObservable(this)
    }

    get renginiaiPagalData() {
        return Array.from(this.renginiuRegistras.values()).sort((a,b) => Date.parse(a.data) - Date.parse(b.data))
    }

    // https://mobx.js.org/actions.html
    uzkrautiRenginius = async () => {
        this.krovimasisPradinis = true;
        try {
            const renginiai = await agent.Renginiai.sarasas();
                renginiai.forEach(renginys => {
                    this.nustatytiRengini(renginys);
                  })
                  this.setKrovimasisPradinis(false);
        } catch (klaida) {
            console.log(klaida);
            this.setKrovimasisPradinis(false);
        }
    }

    uzkrautiRengini = async (id:string) => {
        // patikrinu ar yra renginys
        let renginys = this.gautiRengini(id);
        if (renginys) {
            this.pasirinktasRenginys = renginys;
            return renginys;
        } else {
            this.krovimasisPradinis = true;
            try {
                renginys = await agent.Renginiai.detales(id);
                this.nustatytiRengini(renginys);
                runInAction(() => {
                    this.pasirinktasRenginys = renginys;
                })
                this.setKrovimasisPradinis(false);
                return renginys; 
            } catch (klaida) {
                console.log(klaida);
                this.setKrovimasisPradinis(false);
            }
        }
    }

    private nustatytiRengini = (renginys: Renginys) => {
        renginys.data = renginys.data.split('T')[0];
        // antipatternas reduxui, tinkamas MobX
        this.renginiuRegistras.set(renginys.id, renginys);
    }

    private gautiRengini = (id: string) => {
        return this.renginiuRegistras.get(id);
    }

    setKrovimasisPradinis = (state: boolean) => {
        this.krovimasisPradinis = state;
    }

    // tikrinu ar yra toks renginys duombazeje ir jeigu yra, pakeiciu ji tokiu pat objektu is formos
    sukurtiRengini = async (renginys: Renginys) => {
        this.krovimasis = true;
        try {
            await agent.Renginiai.sukurti(renginys);
            runInAction(() => {
                this.renginiuRegistras.set(renginys.id, renginys);
                this.pasirinktasRenginys = renginys;
                this.redagavimoRezimas = false;
                this.krovimasis = false;
            })
        } catch (klaida) {
            console.log(klaida);
            runInAction(() => {
                this.krovimasis = false;
            })

        }
    }

    atnaujintiRengini = async (renginys: Renginys) => {
        this.krovimasis = true;
        try {
            await agent.Renginiai.atnaujinti(renginys);
            runInAction(() => {
                this.renginiuRegistras.set(renginys.id, renginys);
                this.pasirinktasRenginys = renginys;
                this.redagavimoRezimas = false;
                this.krovimasis = false;
            })
        } catch (klaida) {
            console.log(klaida); 
            runInAction(() => {
                this.krovimasis = false;
            })

        }
    }

    istrintiRengini = async (id: string) => {
        this.krovimasis = true;
        try {
            await agent.Renginiai.istrinti(id);
            runInAction (() => {
                this.renginiuRegistras.delete(id)
                this.krovimasis = false;
            })
        } catch (klaida) {
            console.log(klaida);
            runInAction(() => {
                this.krovimasis = false;
            })
        }
    }
}