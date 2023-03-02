import { fetchFeatureExamples } from '../http/fetcher';

// export const getFetureExamples = (dispatch: AppDispatch) => {
//     fetchFeatureExamples().then((weappers: any) => {
//         console.log('weappers', weappers);
//         if (weappers) {
//             const featureExample = weappers.data;
//             dispatch({
//                 type: ExampleActions.UpdateFeatureExample,
//                 payload: {
//                     featureExample,
//                 }
//             })
//         }
//     })
// }