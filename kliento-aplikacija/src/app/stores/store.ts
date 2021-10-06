import { createContext, useContext } from "react";
import RenginysStore from "./renginysStore";

interface Store {
    renginysStore: RenginysStore
}

export const store: Store = {
    renginysStore: new RenginysStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}