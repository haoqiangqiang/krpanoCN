import axios from 'axios';
import * as constants from './constants';

const getExampleData = (result) => ({
    type: constants.GET_EXAMPLE_DATA,
    data: result,
});

export const fetchExampleData = () => {
    console.log('fetchExamplae');
    return (dispatch) => {
        console.log('axios');
        axios.get('/data/example.json').then(res => {
            console.log('res is', res);
            const result = res.data.data;
            dispatch(getExampleData(result));
        });
    }
}