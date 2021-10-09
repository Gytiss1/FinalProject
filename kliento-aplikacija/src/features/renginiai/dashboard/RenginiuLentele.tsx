import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import Krovimasis from "../../../app/layout/Krovimasis";
import { useStore } from "../../../app/stores/store";
import RenginioDetales from "../detales/RenginioDetales";
import RenginioForma from "../forma/RenginioForma";
import RenginiuSarasas from "./RenginiuSarasas";

export default observer(function RenginiuLentele() {
    const {renginysStore} = useStore();
    const {pasirinktasRenginys, redagavimoRezimas} = renginysStore;

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
                {pasirinktasRenginys && !redagavimoRezimas &&
                    <RenginioDetales />}
                    {redagavimoRezimas &&
                    <RenginioForma />}
            </Grid.Column>
        </Grid>
    )
})