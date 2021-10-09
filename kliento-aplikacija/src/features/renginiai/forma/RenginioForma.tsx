import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Button, Form, Segment } from "semantic-ui-react";
import Krovimasis from "../../../app/layout/Krovimasis";
import { useStore } from "../../../app/stores/store";
import {v4 as uuid} from 'uuid';
import { Link } from "react-router-dom";

export default observer(function RenginioForma(){
    const istorija = useHistory();
    const {renginysStore} = useStore();
    const {sukurtiRengini, atnaujintiRengini, krovimasis, uzkrautiRengini, krovimasisPradinis} = renginysStore;
    const {id} = useParams<{id: string}>();
    const [renginys, setRenginys] = useState({
        // suteikiu pradine busena formai, kad React galetu tikrinti ir irasyti kas ivedama
        id:'',
        aprasymas:'',
        pavadinimas:'',
        kategorija:'',
        data:'',
        miestas:'',
        renginioVieta:''
    });

    // kodas yra vykdomas tik tada kai keiciasi busena
    useEffect (() => {
        if (id) uzkrautiRengini(id).then(renginys => setRenginys(renginys!))
    }, [id, uzkrautiRengini]);

    function handleIrasyti(){
        // jeigu yra id - redaguoju, jeigu ne - kuriu
        if (renginys.id.length === 0) {
            let naujasRenginys = {
                ...renginys,
                id: uuid()
            };
            sukurtiRengini(naujasRenginys).then(() => istorija.push(`/renginiai/${naujasRenginys.id}`));
        } else {
            atnaujintiRengini(renginys).then(() => istorija.push(`/renginiai/${renginys.id}`));
        }
    }

    // funkcija sekanti pakeitimus irasymo lauke ir juos submitinus
    // https://stackoverflow.com/questions/39515960/react-pre-populate-form
    function handleIrasoPakeitimas(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setRenginys({...renginys, [name]: value})
    }

    if (krovimasisPradinis) return <Krovimasis content='Kraunamas renginys...' />

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
                <Button as={Link} to='/renginiai' floated='right' type='button' content='Atšaukti'/> 
            </Form>
        </Segment>
    )
})