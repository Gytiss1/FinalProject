import React from "react";
import { Grid } from "semantic-ui-react";
import { Renginys } from "../../../app/layout/models/renginys";
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
        </Grid>
    )
}