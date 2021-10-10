import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Grid } from "semantic-ui-react";
import Krovimasis from "../../../app/layout/Krovimasis";
import { useStore } from "../../../app/stores/store";
import RenginioDetaliuAntraste from "./RenginioDetaliuAntraste";
import RenginioDetaliuInfo from "./RenginioDetaliuInfo";
import RenginioDetaliuKomentarai from "./RenginioDetaliuKomentarai";
import RenginioDetaliuSoninis from "./RenginioDetaliuSoninis";


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
        <Grid>
            <Grid.Column width={10}>
                <RenginioDetaliuAntraste renginys={renginys}/>
                <RenginioDetaliuInfo renginys={renginys} />
                <RenginioDetaliuKomentarai />
            </Grid.Column>
            <Grid.Column width={6}>
                <RenginioDetaliuSoninis />
            </Grid.Column>
        </Grid>
    )
})