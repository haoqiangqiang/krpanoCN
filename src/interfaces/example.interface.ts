import { ExampleAction } from "../store/actions";

export interface Classify {
    name: string,
    title: string,
    classify: ExampleClassify,
    type: 'normal' | 'new',
    feature: boolean,
}

export enum ExampleClassify {
    normal = 'normal',
    vtour = 'vtour',
    multires = 'multires',
    panovideo = 'panovideo',
    webvr = 'webvr',
    depthmap = 'depthmap',
    js = 'js',
}

export interface XMLContent {
    id: string,
    title: string,
    url: string,
}

export interface ExampleContent {
    id: string,
    content: string,
}

export interface Example {
    id: string,
    title: string,
    type: ExampleClassify[],
    imgUrl: string,
    xml: XMLContent[],
    content: ExampleContent[],
}

export interface GetAllExampleClassifyAction {
    type: typeof ExampleAction.GetFeatureExampleClassify,
    payload: Classify[],
}

export interface GetGroupExampleClassifyAction {
    type: typeof ExampleAction.GetNormalExampleClassify,
    payload: Classify[],
}

export interface GetAllExamplesAction {
    type: typeof ExampleAction.GetAllExamples,
    payload: Example[],
}

export interface GetClassifyExamplesAction {
    type: typeof ExampleAction.GetClassifyExamples,
    payload: ExampleClassify,
}

export type ExampleUnionType = GetAllExampleClassifyAction | GetGroupExampleClassifyAction | GetAllExamplesAction | GetClassifyExamplesAction;