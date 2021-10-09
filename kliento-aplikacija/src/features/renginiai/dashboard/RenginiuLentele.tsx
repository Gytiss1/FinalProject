import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import Krovimasis from "../../../app/layout/Krovimasis";
import { useStore } from "../../../app/stores/store";
import RenginiuSarasas from "./RenginiuSarasas";

export default observer(function RenginiuLentele() {
    const {renginysStore} = useStore();

    // AXIOS
    useEffect(() => {
      renginysStore.uzkrautiRenginius();
    }, [renginysStore]) 
  
    if (renginysStore.krovimasisPradinis) return <Krovimasis content='Programa kraunama...' /> 

    return (
        <Grid>
            <Grid.Column width='10'>
                <RenginiuSarasas />
            </Grid.Column>
            <Grid.Column width='6'>
                <h2>Filtruoti renginius</h2>
            </Grid.Column>
        </Grid>
    )
})