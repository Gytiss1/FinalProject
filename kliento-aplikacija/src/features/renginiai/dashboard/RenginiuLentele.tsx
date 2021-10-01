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
}

export default function RenginiuLentele({
    renginiai, 
    pasirinktasRenginys, 
    pasirinktiRengini, 
    atsauktiPasirinktaRengini
    }: Props){
    return (
        <Grid>
            <Grid.Column width='10'>
            <RenginiuSarasas renginiai={renginiai} pasirinktiRengini={pasirinktiRengini} />
            </Grid.Column>
            <Grid.Column width='6'>
                {pasirinktasRenginys &&
                <RenginioDetales renginys={pasirinktasRenginys} atsauktiPasirinktaRengini={atsauktiPasirinktaRengini}/>}
                <RenginioForma/>
            </Grid.Column>
        </Grid>
    )
}