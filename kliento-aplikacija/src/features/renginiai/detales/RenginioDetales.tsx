import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { Renginys } from "../../../app/layout/models/renginys";

interface Props {
    renginys: Renginys
}

export default function RenginioDetales({renginys}: Props) {
    return (
        <Card>
            <Image src={`/assets/kategorijuVaizdai/${renginys.kategorija}.jpg`} />
            <Card.Content>
                <Card.Header>{renginys.pavadinimas}</Card.Header>
                <Card.Meta>
                    <span>{renginys.data}</span>
                </Card.Meta>
                <Card.Description>
                    {renginys.aprasymas}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button basic color='orange' content='Redaguoti'/>
                    <Button basic color='red' content='Atšaukti'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}