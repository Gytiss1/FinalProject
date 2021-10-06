import { Button, Card, Image } from "semantic-ui-react";
import Krovimasis from "../../../app/layout/Krovimasis";
import { useStore } from "../../../app/stores/store";


export default function RenginioDetales() {
    const {renginysStore} = useStore();
    const {pasirinktasRenginys: renginys, atidarytiForma, atsauktiPasirinktaRengini} = renginysStore;

    if (!renginys) return <Krovimasis />;

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
                    <Button onClick={() => atidarytiForma(renginys.id)} basic color='orange' content='Redaguoti'/>
                    <Button onClick={atsauktiPasirinktaRengini} basic color='red' content='Atšaukti'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}