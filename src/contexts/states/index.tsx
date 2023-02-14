import { initFeatureExampleState } from './featureExample'
export type FetchStatus = keyof State.FetchStatus

const initState: State.AppState = {
    featureExampleState: initFeatureExampleState,
}

export default initState