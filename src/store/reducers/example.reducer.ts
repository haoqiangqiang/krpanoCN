import { ExampleAction } from "../actions";
import { State } from '../../interfaces/state.interface'
import { ExampleUnionType } from "../../interfaces/example.interface";

const intialState: State.ExampleState = {
    features: [],
}

const exampleReducer = (state = intialState, action: ExampleUnionType) => {
    switch (action.type) {
        case ExampleAction.GetFeatureTitle:
            return {
                ...state,
                features: action.payload,
            };
        default:
            return state;
    }
}

export default exampleReducer;