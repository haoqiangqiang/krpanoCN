import { fromJS } from 'immutable';
import * as _ from 'lodash';
import * as constants from './constants';

const defaultState = {
    data: [],
}


const getExampleData = (state, action) => {
    console.log('action is', action);
    const returnState = _.cloneDeep(state);
    returnState.data = action.data;
    console.log('returnState is', returnState);
    return returnState;
    // return state.merge({
    //     data: fromJS(action.data),
    // })
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.GET_EXAMPLE_DATA:
            return getExampleData(state, action)
        default:
            return state;    
    }
}