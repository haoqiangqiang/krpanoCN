import axios, { AxiosResponse } from 'axios';

const baseURL = 'http://localhost:3000/__mocks__'

export const axiosIns = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/vnd.api+json',
    }
})

export const fetchAllClassify = () => (
    axiosIns.get('example_classify.json')
)

export const fetchAllExample = () => (
    axiosIns.get('examples.json')
)
