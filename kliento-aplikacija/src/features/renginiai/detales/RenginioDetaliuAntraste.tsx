import { observer } from 'mobx-react-lite';
import React from 'react'
import {Button, Header, Item, Segment, Image} from 'semantic-ui-react'
import { Renginys } from '../../../app/layout/models/renginys';

const renginioAtvaizdoStilius = {
    filter: 'brightness(30%)'
};

const renginioAtvaizdoTekstoStilius = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

interface Props {
    renginys: Renginys
}

export default observer (function RenginioDetaliuAntraste({renginys}: Props) {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                <Image src={`/assets/kategorijuVaizdai/${renginys.kategorija}.jpg`} fluid style={renginioAtvaizdoStilius}/>
                <Segment style={renginioAtvaizdoTekstoStilius} basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={renginys.pavadinimas}
                                    style={{color: 'white'}}
                                />
                                <p>{renginys.data}</p>
                                <p>
                                    Sukurtas <strong>Jono Jonaičio</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                <Button positive>Dalyvauti</Button>
                <Button>Atšaukti dalyvavimą</Button>
                <Button color='orange' floated='right'>
                    Tvarkyti renginį
                </Button>
            </Segment>
        </Segment.Group>
    )
})