import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Renginys } from "../../../app/layout/models/renginys";

interface Props {
    renginys: Renginys | undefined;
    uzdarytiForma: () => void;
    sukurtiArRedaguoti: (renginys: Renginys) => void;
}

export default function RenginioForma({renginys: pasirinktasRenginys, uzdarytiForma, sukurtiArRedaguoti}: Props){

    // suteikiu pradine busena formai, kad React galetu tikrinti ir irasyti kas ivedama
    const pradineBusena = pasirinktasRenginys ?? {
        id:'',
        aprasymas:'',
        pavadinimas:'',
        kategorija:'',
        data:'',
        miestas:'',
        renginioVieta:''
    }

    const [renginys, setRenginys] = useState(pradineBusena);

    function handleIrasyti(){
        sukurtiArRedaguoti(renginys);
    }

    // funkcija sekanti pakeitimus irasymo lauke ir juos submitinus
    // https://stackoverflow.com/questions/39515960/react-pre-populate-form
    function handleIrasoPakeitimas(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setRenginys({...renginys, [name]: value})
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleIrasyti} autoComplete='off' >
                <Form.Input placeholder='Pavadinimas' value={renginys.pavadinimas} name='pavadinimas' onChange={handleIrasoPakeitimas}/>
                <Form.TextArea placeholder='Aprašymas' value={renginys.aprasymas} name='aprasymas' onChange={handleIrasoPakeitimas}/>
                <Form.Input placeholder='Kategorija' value={renginys.kategorija} name='kategorija' onChange={handleIrasoPakeitimas}/>
                <Form.Input placeholder='Data' type='date' value={renginys.data} name='data' onChange={handleIrasoPakeitimas}/>
                <Form.Input placeholder='Miestas' value={renginys.miestas} name='miestas' onChange={handleIrasoPakeitimas}/>
                <Form.Input placeholder='Renginio vieta' value={renginys.renginioVieta} name='renginioVieta' onChange={handleIrasoPakeitimas}/>
                <Button floated='right' positive type='submit' content='Įrašyti'/>
                <Button onClick={uzdarytiForma} floated='right' type='button' content='Atšaukti'/>
            </Form>
        </Segment>
    )
}