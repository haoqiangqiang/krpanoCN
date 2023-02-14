export enum AppActions {

}

export enum ExampleActions {
    UpdateFeatureExample = 'updateFeatureExample',
}

export type StateActions = AppActions | ExampleActions;

export default StateActions;