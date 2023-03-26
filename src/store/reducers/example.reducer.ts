import { ExampleAction } from "../actions";
import { State } from '../../interfaces/state.interface'
import { ExampleUnionType } from "../../interfaces/example.interface";

const intialState: State.ExampleState = {
    features: [],
    normalClassify: [],
    examples: [],
    classifyExamples: [],
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
        case ExampleAction.GetAllExamples:
            return {
                ...state,
                examples: action.payload,
                classifyExamples: action.payload,
            }
        case ExampleAction.GetClassifyExamples:
            const classifyExamples = state.examples.filter(example => example.type.findIndex(classify => classify === action.payload) !== -1);
            return {
                ...state,
                classifyExamples,
            }
        default:
            return state;
    }
}

export default exampleReducer;