import { observer } from 'mobx-react-lite';
import React from 'react'
import {Segment, Grid, Icon} from 'semantic-ui-react'
import { Renginys } from '../../../app/layout/models/renginys';

interface Props {
    renginys: Renginys
}

export default observer(function RenginioDetaliuInfo({renginys}: Props) {
    return (
        <Segment.Group>
            <Segment attached='top'>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size='large' color='orange' name='info'/>
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{renginys.aprasymas}</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='calendar' size='large' color='orange'/>
                    </Grid.Column>
                    <Grid.Column width={15}>
            <span>
              {renginys.data}
            </span>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='marker' size='large' color='orange'/>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <span>{renginys.renginioVieta}, {renginys.miestas}</span>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Segment.Group>
    )
})