import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header href="#">
                    <img src="assets/logo.png" alt="logotipas" style={{marginRight: '15px'}}/>
                    Ką veikti Lietuvoje?
                </Menu.Item>
                <Menu.Item name='Renginiai'/>
                <Menu.Item>
                    <Button positive content='Sukurti renginį'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}