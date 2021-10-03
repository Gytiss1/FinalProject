import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Renginys } from "../../../app/layout/models/renginys";

interface Props {
    renginys: Renginys | undefined;
    uzdarytiForma: () => void;
}

export default function RenginioForma({renginys, uzdarytiForma}: Props){
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Pavadinimas'/>
                <Form.Input placeholder='Aprašymas'/>
                <Form.Input placeholder='Kategorija'/>
                <Form.Input placeholder='Data'/>
                <Form.Input placeholder='Miestas'/>
                <Form.Input placeholder='Renginio vieta'/>
                <Button floated='right' positive type='submit' content='Įrašyti'/>
                <Button onClick={uzdarytiForma} floated='right' type='button' content='Atšaukti'/>
            </Form>
        </Segment>
    )
}