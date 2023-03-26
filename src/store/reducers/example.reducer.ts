import { ExampleAction } from "../actions";
import { State } from '../../interfaces/state.interface'
import { ExampleUnionType } from "../../interfaces/example.interface";

const intialState: State.ExampleState = {
    features: [],
    normalClassify: [],
}

const exampleReducer = (state = intialState, action: ExampleUnionType) => {
    switch (action.type) {
        case ExampleAction.GetFeatureExampleClassify:
            return {
                ...state,
                features: action.payload,
            };
        case ExampleAction.GetNormalExampleClassify:
            return {
                ...state,
                normalClassify: action.payload,
            }
        default:
            return state;
    }
}

export default exampleReducer;