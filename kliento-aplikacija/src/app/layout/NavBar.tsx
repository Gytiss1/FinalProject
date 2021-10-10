import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function Navigacija() {

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header as={NavLink} exact to='/'>
                    <img src="assets/logo.png" alt="logotipas" style={{marginRight: '15px'}}/>
                    Veikli Lietuva!
                </Menu.Item>
                <Menu.Item name='Renginiai' as={NavLink} to='/renginiai'/>
                <Menu.Item>
                    <Button as={NavLink} to='/sukurtiRengini' positive content='Sukurti renginį'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}