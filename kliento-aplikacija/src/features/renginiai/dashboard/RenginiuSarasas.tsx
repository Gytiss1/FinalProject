import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default observer(function RenginiuSarasas() {
    const {renginysStore} = useStore();
    const {istrintiRengini, renginiaiPagalData, krovimasis} = renginysStore;
    const [target, setTarget] = useState('');

    function handleRenginioIstrynimas(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        istrintiRengini(id);
    }

    return (
        <Segment>
            <Item.Group divided>
                {renginiaiPagalData.map(renginys => (
                    <Item key={renginys.id}>
                        <Item.Content>
                            <Item.Header as='a'>{renginys.pavadinimas}</Item.Header>
                            <Item.Meta>{renginys.data}</Item.Meta>
                            <Item.Description>
                                <div>{renginys.aprasymas}</div>
                                <div>{renginys.renginioVieta}, {renginys.miestas}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button as={Link} to={`/renginiai/${renginys.id}`} floated='right' content='Peržiūrėti' color='orange'/>
                                <Button 
                                    loading={krovimasis && target === renginys.id} 
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
})