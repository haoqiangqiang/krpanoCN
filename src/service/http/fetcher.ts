import axios, { AxiosResponse } from 'axios';

const baseURL = 'http://localhost:3000/__mocks__'

export const axiosIns = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/vnd.api+json',
    }
})

export const fetchFeatureExamples = () =>
    axiosIns.get('feature_example.json').then((res: AxiosResponse) => { return res.data })
