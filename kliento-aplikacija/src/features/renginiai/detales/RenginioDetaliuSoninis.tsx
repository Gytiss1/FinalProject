import React from 'react'
import { Segment, List, Label, Item, Image, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../app/stores/store'
import { Renginys } from '../../../app/layout/models/renginys'

interface Props {
    renginys: Renginys
}

export default observer(function RenginioDetaliuSoninis ({renginys}: Props) {
    const {renginysStore} = useStore();
    const {istrintiRengini, krovimasis} = renginysStore;

    return (
        <>
            <Segment
                textAlign='center'
                style={{ border: 'none' }}
                attached='top'
                inverted
                color='orange'
            >
                3 žmonės dalyvauja
            </Segment>
            <Segment attached>
                <List relaxed divided>
                    <Item style={{ position: 'relative' }}>
                        <Label
                            style={{ position: 'absolute' }}
                            color='orange'
                            ribbon='right'
                        >
                            Organizatorius
                        </Label>
                        <Image size='tiny' src={'/assets/vartotojas.png'} />
                        <Item.Content verticalAlign='middle'>
                            <Item.Header as='h3'>
                                <Link to={`#`}>Tomas</Link>
                            </Item.Header>
                            <Item.Extra style={{ color: 'orange' }}>Sekamas</Item.Extra>
                        </Item.Content>
                    </Item>

                    <Item style={{ position: 'relative' }}>
                        <Image size='tiny' src={'/assets/vartotojas.png'} />
                        <Item.Content verticalAlign='middle'>
                            <Item.Header as='h3'>
                                <Link to={`#`}>Andrius</Link>
                            </Item.Header>
                            <Item.Extra style={{ color: 'orange' }}>Sekamas</Item.Extra>
                        </Item.Content>
                    </Item>

                    <Item style={{ position: 'relative' }}>
                        <Image size='tiny' src={'/assets/vartotojas.png'} />
                        <Item.Content verticalAlign='middle'>
                            <Item.Header as='h3'>
                                <Link to={`#`}>Monika</Link>
                            </Item.Header>
                        </Item.Content>
                    </Item>
                </List>
            </Segment>
            <Segment clearing>
                <Header content='Renginio administravimas' as='h3' />
                <Button onClick={() => istrintiRengini(renginys.id)} floated='left' content='Ištrinti renginį' color='red' loading={krovimasis} as={Link} to={`/renginiai`} />
            </Segment>
        </>

    )
})