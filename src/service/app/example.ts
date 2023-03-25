import { FeatureExampleAction } from '../../store/actions';
import { fetchFeatureExamples } from '../http/fetcher';
import { FeatureExample } from '../../interfaces/feature.interface'

export const getFetureExamples = (dispatch: any) => {
    fetchFeatureExamples().then((weappers: any) => {
        console.log('weappers', weappers);
        if (weappers) {
            const featureExample: FeatureExample[] = weappers.data;
            dispatch({
                type: FeatureExampleAction.updateFeatureExample,
                payload: [
                    ...featureExample
                ]
            })
        }
    })
}