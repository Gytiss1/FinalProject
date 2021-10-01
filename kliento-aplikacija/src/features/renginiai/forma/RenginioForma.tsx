import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default function RenginioForma(){
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
                <Button floated='right' type='button' content='Atšaukti'/>
            </Form>
        </Segment>
    )
}