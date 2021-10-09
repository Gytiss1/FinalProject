import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import Krovimasis from "../../../app/layout/Krovimasis";
import { useStore } from "../../../app/stores/store";
import RenginiuSarasas from "./RenginiuSarasas";

export default observer(function RenginiuLentele() {
    const {renginysStore} = useStore();
    // parsitempiu renginiu sarasa is store
    const {uzkrautiRenginius, renginiuRegistras} = renginysStore;

    // AXIOS
    useEffect(() => {
        // tikrinu ar jau uzkrauti renginiai is duombazes
      if (renginiuRegistras.size <= 1) uzkrautiRenginius();
    }, [renginiuRegistras.size, uzkrautiRenginius]) 
  
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