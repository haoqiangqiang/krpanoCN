import { AxiosResponse } from 'axios';
import { AnyAction, Dispatch } from 'redux';
import { Classify } from '../../interfaces/example.interface';
import { ExampleAction } from '../../store/actions';
import { fetchAllClassify } from '../http/api';


// 获取全部案例分类
export const getFeatureExampleClassify = (dispatch: Dispatch<AnyAction>) => {
    fetchAllClassify().then((res: AxiosResponse<Classify[]>) => {
        if (res) {
            const classify = res.data.filter(classify => classify.feature)
            dispatch({
                type: ExampleAction.GetFeatureExampleClassify,
                payload: [
                    ...classify
                ]
            })
        }
    })
}

// 获取 feature || normal 案例分类
export const getNormalExampleClassify = (dispatch: Dispatch<AnyAction>) => {
    fetchAllClassify().then((res: AxiosResponse<Classify[]>) => {
        if (res) {
            const classify = res.data.filter(classify => !classify.feature)
            dispatch({
                type: ExampleAction.GetNormalExampleClassify,
                payload: [
                    ...classify
                ]
            })
        }
    })
}

// 切换案例分类
export const switchExampleClass = (classify: string, dispatch: Dispatch<AnyAction>) => {
    console.log('classify', classify, 'dispatch', dispatch);
}