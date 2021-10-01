import React from "react";
import { Grid } from "semantic-ui-react";
import { Renginys } from "../../../app/layout/models/renginys";
import RenginioDetales from "../detales/RenginioDetales";
import RenginiuSarasas from "./RenginiuSarasas";

interface Props {
    renginiai: Renginys[];
}

export default function RenginiuLentele({renginiai}: Props){
    return (
        <Grid>
            <Grid.Column width='10'>
            <RenginiuSarasas renginiai={renginiai} />
            </Grid.Column>
            <Grid.Column width='6'>
                {renginiai[0] &&
                <RenginioDetales renginys={renginiai[0]}/>}
            </Grid.Column>
        </Grid>
    )
}