import React from "react";
import { Grid } from "semantic-ui-react";
import { Renginys } from "../../../app/layout/models/renginys";
import RenginioDetales from "../detales/RenginioDetales";
import RenginioForma from "../forma/RenginioForma";
import RenginiuSarasas from "./RenginiuSarasas";

interface Props {
    renginiai: Renginys[];
    pasirinktasRenginys: Renginys | undefined;
    pasirinktiRengini: (id: string) => void;
    atsauktiPasirinktaRengini: () => void;
    redaguoti: boolean;
    atidarytiForma: (id:string) => void;
    uzdarytiForma: () => void; 
    sukurtiArRedaguoti: (renginys: Renginys) => void;
    istrintiRengini: (id: string) => void;
}

export default function RenginiuLentele({
    renginiai,
    pasirinktasRenginys,
    pasirinktiRengini,
    atsauktiPasirinktaRengini,
    redaguoti,
    atidarytiForma,
    uzdarytiForma,
    sukurtiArRedaguoti,
    istrintiRengini }: Props) {

    return (
        <Grid>
            <Grid.Column width='10'>
                <RenginiuSarasas renginiai={renginiai} pasirinktiRengini={pasirinktiRengini} istrintiRengini={istrintiRengini}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {pasirinktasRenginys && !redaguoti &&
                    // naudojamas hook'as prisegantis renginio id arba paverciantis ji underfined
                    <RenginioDetales 
                        renginys={pasirinktasRenginys} 
                        atsauktiPasirinktaRengini={atsauktiPasirinktaRengini}
                        atidarytiForma={atidarytiForma}
                    />}
                    {redaguoti &&
                    <RenginioForma 
                        uzdarytiForma={uzdarytiForma}
                        renginys={pasirinktasRenginys}
                        sukurtiArRedaguoti={sukurtiArRedaguoti}
                    />}
            </Grid.Column>
        </Grid>
    )
}