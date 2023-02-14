import React from "react"
import StateActions, { AppActions, ExampleActions } from "../actions";
import { exampleReducer } from './example'

export type AppDispatch = React.Dispatch<{ type: StateActions; payload: any }>

export const reducer = (
    state: State.AppState,
    { type, payload }: { type: StateActions, payload: any },
): State.AppState => {
    return exampleReducer(state, {
        type: type as ExampleActions,
        payload,
    })
}