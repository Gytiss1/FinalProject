import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Segment } from "semantic-ui-react";
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
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/vartotojas.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/renginiai/${renginys.id}`} >{renginys.pavadinimas}</Item.Header>
                            <Item.Description>Sukurtas Jono Jonaičio</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {renginys.data}
                    <Icon name='marker' /> {renginys.renginioVieta}
                </span>
            </Segment>
            <Segment secondary>
                Dalyviai
            </Segment>
            <Segment clearing>
                <span>
                    {renginys.aprasymas}
                </span>
                <Button as={Link} to={`/renginiai/${renginys.id}`} color='orange' content='Pažiūrėti' floated='right' />
            </Segment>
        </Segment.Group>
    )
}