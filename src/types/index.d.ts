// declare namespace State {
//     export interface FeatureExample {
//         name: string
//         title: string
//         urk: string
//         type: 'normal' | 'new'
//     }
//     interface FetchStatusValue {
//         OK: string
//         Error: string
//         InProgress: string
//         None: string
//     }
//     export type FetchStatus = keyof FetchStatusValue
//     export interface StatisticChartsState {

//     }
//     export interface FeatureExampleState {
//         example: FeatureExample[]
//     }
//     export interface PageState extends StatisticChartsState {
//         featureExampleState: FeatureExampleState
//     }
//     export interface AppState extends PageState {
//         // app: App
//         // components: Components
//     }

// }

// declare namespace CustomRouter {
//     interface Route {
//         key: string,
//         path: string,
//         params?: string,
//         exact?: boolean,
//         element?: any,
//     }
// }