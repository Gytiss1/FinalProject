import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Button } from "semantic-ui-react";

export default function Pradinis() {
    return(
        <Segment inverted textAlign='center' vertical className='pradinisHead'>
            <Container text>
                <Image size='small' src='/assets/logo.png' alt='logotipas' style={{marginBottom: 12}} centered />
                <Header as='h1' inverted>
                    Veikli Lietuva!
                </Header>
                <Button as={Link} to='/renginiai' size='huge' inverted>
                    Apsilankyti
                </Button>
            </Container>
        </Segment>
    )
}