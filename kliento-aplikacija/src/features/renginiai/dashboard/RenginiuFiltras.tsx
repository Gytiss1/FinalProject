import React from "react";
import Calendar from "react-calendar";
import { Header, Menu } from "semantic-ui-react";

export default function RenginiuFiltras() {
    return (
        <>
            <Menu vertical size='large' style={{ width: '100%', marginTop: 25 }}>
                <Header icon='filter' attached color='orange' content='Filtrai' />
                <Menu.Item content='Visi renginiai' />
                <Menu.Item content='Renginiai kuriuose dalyvauju' />
                <Menu.Item content='Renginiai kuriuos paskelbiau' />
            </Menu>
            <Header />
            <Calendar />
        </>
    )
}