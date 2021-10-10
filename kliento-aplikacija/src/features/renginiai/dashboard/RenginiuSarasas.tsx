import React, { Fragment } from "react";
import { observer } from "mobx-react-lite";
import { Header } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import RenginiuSarasoElementas from "./RenginiuSarasoElementas";


export default observer(function RenginiuSarasas() {
    const { renginysStore } = useStore();
    const { grupuotiRenginius } = renginysStore;

    return (
        <>
            {grupuotiRenginius.map(([grupe, renginiai]) => (
                <Fragment key={grupe}>
                    <Header sub color='yellow'>
                        {grupe}
                    </Header>
                    {renginiai.map(renginys => (
                        <RenginiuSarasoElementas key={renginys.id} renginys={renginys} />
                    ))}
                </Fragment>
            ))}
        </>
    )
})