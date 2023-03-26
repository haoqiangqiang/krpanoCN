import { AxiosResponse } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { AnyAction, Dispatch } from 'redux';
import { Classify, Example, ExampleClassify } from '../../interfaces/example.interface';
import { ExampleAction } from '../../store/actions';
import { fetchAllClassify, fetchAllExample } from '../http/api';


// 获取 feature 案例分类
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

// 获取 normal 案例分类
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

// 获取所有案例
export const getAllExample = (dispatch: Dispatch<AnyAction>) => {
    fetchAllExample().then((res: AxiosResponse<{ title: string, data: Example[] }>) => {
        if (res) {
            const examples = res.data.data;
            dispatch({
                type: ExampleAction.GetAllExamples,
                payload: [
                    ...examples
                ]
            })
        }
    })
}

// 切换案例分类
export const switchExampleClass = (classify: ExampleClassify, dispatch: Dispatch<AnyAction>) => {
    classify = classify || ExampleClassify.normal;
    dispatch({
        type: ExampleAction.GetClassifyExamples,
        payload: classify,
    })
}

// 设置案例分类的标题头
export const setExampleClassify = (classify: string) => {
    classify = classify.slice(1) as ExampleClassify;
    switch (classify) {
        case ExampleClassify.depthmap:
            return '景深案例';
        case ExampleClassify.js:
            return 'Javascript 案例';
        case ExampleClassify.multires:
            return '高分辨率案例';
        case ExampleClassify.panovideo:
            return '全景影音案例';
        case ExampleClassify.vtour:
            return '虚拟游览案例';
        case ExampleClassify.webvr:
            return 'VR 案例';
        default:
            return '全部案例';
    }
}