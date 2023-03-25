import { combineReducers } from 'redux';
import testReducer from './test.reducer';
import featureExampleReducer from './feature_example.reducer';


const rootReducer = combineReducers({
    test: testReducer,
    feature: featureExampleReducer,
})

export default rootReducer;