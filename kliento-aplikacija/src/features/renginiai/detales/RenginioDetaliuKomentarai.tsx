import { observer } from 'mobx-react-lite'
import React from 'react'
import {Segment, Header, Comment, Form, Button} from 'semantic-ui-react'

export default observer(function RenginioDetaliuKomentarai() {
    return (
        <>
            <Segment
                textAlign='center'
                attached='top'
                inverted
                color='orange'
                style={{border: 'none'}}
            >
                <Header>Diskutuokite su kitais dalyviais</Header>
            </Segment>
            <Segment attached>
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar src='/assets/vartotojas.png'/>
                        <Comment.Content>
                            <Comment.Author as='a'>Gytis</Comment.Author>
                            <Comment.Metadata>
                                <div>Šiandien, 15:45</div>
                            </Comment.Metadata>
                            <Comment.Text>Kaip gražu!</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Atsakyti</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Comment>
                        <Comment.Avatar src='/assets/vartotojas.png'/>
                        <Comment.Content>
                            <Comment.Author as='a'>Karolina</Comment.Author>
                            <Comment.Metadata>
                                <div>Prieš 4 dienas</div>
                            </Comment.Metadata>
                            <Comment.Text>Super! Tai ko ieškojau.</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Atsakyti</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Form reply>
                        <Form.TextArea/>
                        <Button
                            content='Pridėti atsakymą'
                            labelPosition='left'
                            icon='edit'
                            positive
                        />
                    </Form>
                </Comment.Group>
            </Segment>
        </>

    )
})