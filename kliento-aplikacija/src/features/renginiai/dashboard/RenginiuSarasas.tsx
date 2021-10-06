import React, { SyntheticEvent, useState } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Renginys } from "../../../app/layout/models/renginys";

interface Props {
    renginiai: Renginys[];
    pasirinktiRengini: (id: string) => void;
    istrintiRengini: (id: string) => void;
    irasymas: boolean;
}

export default function RenginiuSarasas({renginiai, pasirinktiRengini, istrintiRengini, irasymas}: Props) {
    const [target, setTarget] = useState('');

    function handleRenginioIstrynimas(e: SyntheticEvent<HTMLButtonElement>, id:string) {
        setTarget(e.currentTarget.name);
        istrintiRengini(id);
    }

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
                                <Button onClick={() => pasirinktiRengini(renginys.id)} floated='right' content='Peržiūrėti' color='orange'/>
                                <Button 
                                    loading={irasymas && target === renginys.id} 
                                    onClick={(e) => handleRenginioIstrynimas(e, renginys.id)} 
                                    floated='right' 
                                    content='Ištrinti' 
                                    color='red'
                                    name={renginys.id} 
                                />
                                <Label basic content={renginys.kategorija}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}