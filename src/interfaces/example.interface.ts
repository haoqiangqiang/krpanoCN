import { ExampleAction } from "../store/actions";

export interface FeatureTitle {
    name: string,
    title: string,
    url: string,
    type: 'normal' | 'new',
}

export interface GetFeatureTitleAction {
    type: typeof ExampleAction.GetFeatureTitle
    payload: FeatureTitle[]
}

export type ExampleUnionType = GetFeatureTitleAction