import data from './data';
import modal from './modal';

import  {combineReducers} from 'redux';

const rootReducers = combineReducers({
    data, 
    modal
});

export default rootReducers;