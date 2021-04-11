import { combineReducers } from 'redux';

import { reducer as exampleReducer } from '../main/example/store';

const reducer = combineReducers({
    example: exampleReducer,
})

export default reducer;