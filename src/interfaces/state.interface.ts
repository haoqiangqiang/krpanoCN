import { Classify, Example } from "./example.interface"

export declare namespace State {
    export interface AppState {
        example: ExampleState
    }
    export interface ExampleState {
        features: Classify[],
        normalClassify: Classify[],
        examples: Example[],
        classifyExamples: Example[],
    }

}