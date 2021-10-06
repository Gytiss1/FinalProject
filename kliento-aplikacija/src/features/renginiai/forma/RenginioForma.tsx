import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default observer(function RenginioForma(){
    const {renginysStore} = useStore();
    const {pasirinktasRenginys, uzdarytiForma, sukurtiRengini, atnaujintiRengini, krovimasis} = renginysStore;

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
        renginys.id ? atnaujintiRengini(renginys) : sukurtiRengini(renginys);
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
                <Button loading={krovimasis} floated='right' positive type='submit' content='Įrašyti'/>
                <Button onClick={uzdarytiForma} floated='right' type='button' content='Atšaukti'/>
            </Form>
        </Segment>
    )
})