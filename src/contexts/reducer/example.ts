import { ExampleActions } from '../actions'

export const exampleReducer = (
    state: State.AppState,
    {type, payload}: {type: ExampleActions; payload: State.FeatureExampleState},
): State.AppState => {
    switch(type) {
        case ExampleActions.UpdateFeatureExample:
            return {
                ...state,
                featureExampleState: payload
            }
    }
}