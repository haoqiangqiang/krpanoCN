import { AxiosResponse } from 'axios';
import { AnyAction, Dispatch } from 'redux';
import { FeatureTitle } from '../../interfaces/example.interface';
import { ExampleAction } from '../../store/actions';
import { fetchFeatureTitles } from '../http/api';

export const getFetureTitle = (dispatch: Dispatch<AnyAction>) => {
    fetchFeatureTitles().then((res: AxiosResponse<FeatureTitle[]>) => {
        if (res) {
            const featureTitle = res.data
            dispatch({
                type: ExampleAction.GetFeatureTitle,
                payload: [
                    ...featureTitle
                ]
            })
        }
    })
}