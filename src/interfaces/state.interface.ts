import { Classify } from "./example.interface"

export declare namespace State {
    export interface AppState {
        example: ExampleState
    }
    export interface ExampleState {
        features: Classify[],
        normalClassify: Classify[],
    }

}