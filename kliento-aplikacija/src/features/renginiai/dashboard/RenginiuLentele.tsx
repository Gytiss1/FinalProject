import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Renginys } from "../../../app/layout/models/renginys";

interface Props {
    renginiai: Renginys[];
}

export default function RenginiuLentele(props: Props){
    return (
        <Grid>
            <Grid.Column width='10'>
            <List>
                {props.renginiai.map(renginys => (
                    <List.Item key={renginys.id}>
                        {renginys.pavadinimas}
                    </List.Item>
                ))}
            </List>
            </Grid.Column>
        </Grid>
    )
}