import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Renginys } from "../../../app/layout/models/renginys";

interface Props {
    renginys: Renginys
}

export default function RenginiuSarasoElementas({renginys}: Props) {

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/vartotojas.png' />
                        <Item.Content verticalAlign='middle'>
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
            </Segment>
            <Segment clearing>
                <Button as={Link} to={`/renginiai/${renginys.id}`} color='orange' content='Pažiūrėti' floated='right' />
            </Segment>
        </Segment.Group>
    )
}