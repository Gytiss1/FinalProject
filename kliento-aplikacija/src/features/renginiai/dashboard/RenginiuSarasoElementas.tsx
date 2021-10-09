import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Label } from "semantic-ui-react";
import { Renginys } from "../../../app/layout/models/renginys";
import { useStore } from "../../../app/stores/store";

interface Props {
    renginys: Renginys
}

export default function RenginiuSarasoElementas({renginys}: Props) {

    const {renginysStore} = useStore();
    const {istrintiRengini, krovimasis} = renginysStore;
    const [target, setTarget] = useState('');
    
    function handleRenginioIstrynimas(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        istrintiRengini(id);
    }

    return (
        <Item key={renginys.id}>
            <Item.Content>
                <Item.Header as='a'>{renginys.pavadinimas}</Item.Header>
                <Item.Meta>{renginys.data}</Item.Meta>
                <Item.Description>
                    <div>{renginys.aprasymas}</div>
                    <div>{renginys.renginioVieta}, {renginys.miestas}</div>
                </Item.Description>
                <Item.Extra>
                    <Button as={Link} to={`/renginiai/${renginys.id}`} floated='right' content='Peržiūrėti' color='orange' />
                    <Button
                        loading={krovimasis && target === renginys.id}
                        onClick={(e) => handleRenginioIstrynimas(e, renginys.id)}
                        floated='right'
                        content='Ištrinti'
                        color='red'
                        name={renginys.id}
                    />
                    <Label basic content={renginys.kategorija} />
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}