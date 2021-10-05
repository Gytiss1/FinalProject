import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

// objektas krovimosi animacijai kurti
interface Props {
    inverted?: boolean;
    content?: string;
}

// funkcija atvaizduojanti krovimosi procesa (SemanticUI turi krovimosi overlay)
// https://semantic-ui.com/elements/loader.html
export default function Krovimasis({inverted = true, content='Kraunama...'}: Props){
    return(
        <Dimmer active={true} inverted={inverted}>
            <Loader content={content} />
        </Dimmer>
    )
}