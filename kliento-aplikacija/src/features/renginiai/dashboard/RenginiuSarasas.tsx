import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Renginys } from "../../../app/layout/models/renginys";

interface Props {
    renginiai: Renginys[];
    pasirinktiRengini: (id: string) => void;
    istrintiRengini: (id: string) => void;
}

export default function RenginiuSarasas({renginiai, pasirinktiRengini, istrintiRengini}: Props) {
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
                                <div>{renginys.renginioVieta}, {renginys.miestas}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => pasirinktiRengini(renginys.id)} floated='right' content='Peržiūrėti' color='google plus'/>
                                <Button onClick={() => istrintiRengini(renginys.id)} floated='right' content='Ištrinti' color='red'/>
                                <Label basic content={renginys.kategorija}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}