import { FeatureExampleAction } from "../actions";

const featureExampleReducer = (state: string[] = [], { type, payload }: { type: FeatureExampleAction; payload: any }) => {
    switch (type) {
        case FeatureExampleAction.updateFeatureExample:
            return [...payload];
        default:
            return state;
    }
}

export default featureExampleReducer