import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Renginys } from "../layout/models/renginys";
import {v4 as uuid} from 'uuid';

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
        try {
            const renginiai = await agent.Renginiai.sarasas();
                renginiai.forEach(renginys => {
                    renginys.data = renginys.data.split('T')[0];
                    // antipatternas reduxui, tinkamas MobX
                    this.renginiuRegistras.set(renginys.id, renginys);
                  })
                  this.setKrovimasisPradinis(false);
        } catch (klaida) {
            console.log(klaida);
            this.setKrovimasisPradinis(false);
        }
    }

    setKrovimasisPradinis = (state: boolean) => {
        this.krovimasisPradinis = state;
    }

    // surandu rengini pagal id kuris perduotas is mygtuko paspaudimo
    pasirinktiRengini = (id: string) => {
        this.pasirinktasRenginys = this.renginiuRegistras.get(id);
    }

    // nunulinu id ir detaliu tooltip dingsta
    // https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react
    atsauktiPasirinktaRengini = () => {
        this.pasirinktasRenginys = undefined;
    }

    // perduodamas id is renginio objekto ir nustatomas pasirinkimo funkcijai
    atidarytiForma = (id?: string) => {
        id ? this.pasirinktiRengini(id) : this.atsauktiPasirinktaRengini();
        this.redagavimoRezimas = true;
    }

    // paspaudus atsaukti nunulinamas propsas
    uzdarytiForma = () => {
        this.redagavimoRezimas = false;
    }

    // tikrinu ar yra toks renginys duombazeje ir jeigu yra, pakeiciu ji tokiu pat objektu is formos
    sukurtiRengini = async (renginys: Renginys) => {
        this.krovimasis = true;
        renginys.id = uuid();
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
                if (this.pasirinktasRenginys?.id === id) this.atsauktiPasirinktaRengini();
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