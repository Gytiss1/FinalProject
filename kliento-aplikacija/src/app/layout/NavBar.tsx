import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default function NavBar() {

    const {renginysStore} = useStore();

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header as={NavLink} exact to='/'>
                    <img src="assets/logo.png" alt="logotipas" style={{marginRight: '15px'}}/>
                    Ką veikti Lietuvoje?
                </Menu.Item>
                <Menu.Item name='Renginiai' as={NavLink} to='/renginiai'/>
                <Menu.Item>
                    <Button as={NavLink} to='/sukurtiRengini' positive content='Sukurti renginį'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}