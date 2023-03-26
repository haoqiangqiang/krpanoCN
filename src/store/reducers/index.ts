import { combineReducers } from 'redux';
import exampleReducer from './example.reducer';


const rootReducer = combineReducers({
    example: exampleReducer,
})

export default rootReducer;