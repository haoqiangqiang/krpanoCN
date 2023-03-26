import { ExampleAction } from "../store/actions";

export interface Classify {
    name: string,
    title: string,
    classify: string,
    type: 'normal' | 'new',
    feature: boolean,
}

export interface GetAllExampleClassifyAction {
    type: typeof ExampleAction.GetFeatureExampleClassify,
    payload: Classify[],
}

export interface GetGroupExampleClassifyAction {
    type: typeof ExampleAction.GetNormalExampleClassify,
    payload: Classify[],
}

export type ExampleUnionType = GetAllExampleClassifyAction | GetGroupExampleClassifyAction;