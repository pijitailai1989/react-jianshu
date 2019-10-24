
import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/store/reducer';
import homeReducer from '../pages/home/store/reducer';
import homeDetail from '../pages/detail/store/reducer';

const reducer = combineReducers({
    header : headerReducer,
    home : homeReducer,
    detail : homeDetail
});

export default reducer;