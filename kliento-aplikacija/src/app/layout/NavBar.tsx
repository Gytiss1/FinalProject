import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default function NavBar() {

    const {renginysStore} = useStore();

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header href="#">
                    <img src="assets/logo.png" alt="logotipas" style={{marginRight: '15px'}}/>
                    Ką veikti Lietuvoje?
                </Menu.Item>
                <Menu.Item name='Renginiai'/>
                <Menu.Item>
                    <Button onClick={() => renginysStore.atidarytiForma()} positive content='Sukurti renginį'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}