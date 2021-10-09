import React from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function Pradinis() {
    return(
        <Container style={{marginTop: '5em'}}>
            <h1>Pradinis puslapis</h1>
            <h3>Eiti į <Link to='/renginiai'>renginius</Link></h3>
        </Container>
    )
}