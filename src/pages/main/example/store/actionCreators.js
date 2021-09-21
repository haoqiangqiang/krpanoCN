import axios from 'axios';
import * as constants from './constants';

const getExampleData = (result) => ({
    type: constants.GET_EXAMPLE_DATA,
    data: result,
});

export const fetchExampleData = () => {
    return (dispatch) => {
        axios.get('/data/example.json').then(res => {
            const result = res.data.data;
            dispatch(getExampleData(result));
        });
    }
}