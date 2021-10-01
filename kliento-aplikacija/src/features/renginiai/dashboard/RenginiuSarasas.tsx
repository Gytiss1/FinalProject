import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Renginys } from "../../../app/layout/models/renginys";

interface Props {
    renginiai: Renginys[]
}

export default function RenginiuSarasas({renginiai}: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {renginiai.map(renginys => (
                    <Item key={renginys.id}>
                        <Item.Content>
                            <Item.Header as='a'>{renginys.pavadinimas}</Item.Header>
                            <Item.Meta>{renginys.data}</Item.Meta>
                            <Item.Description>
                                <div>{renginys.aprasymas}</div>
                                <div>{renginys.miestas}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button floated='right' content='View' color='google plus'/>
                                <Label basic content={renginys.kategorija}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}