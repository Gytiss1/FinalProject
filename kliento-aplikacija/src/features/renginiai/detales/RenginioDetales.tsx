import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import Krovimasis from "../../../app/layout/Krovimasis";
import { useStore } from "../../../app/stores/store";


export default observer(function RenginioDetales() {
    const {renginysStore} = useStore();
    const {pasirinktasRenginys: renginys, uzkrautiRengini, krovimasisPradinis} = renginysStore;
    // surisu linkus su objektais
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if (id) uzkrautiRengini(id);
    }, [id, uzkrautiRengini])

    if (krovimasisPradinis || !renginys) return <Krovimasis />;

    return (
        <Card fluid>
            <Image src={`/assets/kategorijuVaizdai/${renginys.kategorija}.jpg`} />
            <Card.Content>
                <Card.Header>{renginys.pavadinimas}</Card.Header>
                <Card.Meta>
                    <span>{renginys.data}</span>
                </Card.Meta>
                <Card.Description>
                    {renginys.aprasymas}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button as={Link} to={`/redaguoti/${renginys.id}`} basic color='orange' content='Redaguoti'/>
                    <Button as={Link} to='/renginiai' basic color='red' content='Atšaukti'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
})