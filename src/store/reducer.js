
import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/store/reducer';
import homeReducer from '../pages/home/store/reducer';
import homeDetail from '../pages/detail/store/reducer';
import homeLogin from '../pages/login/store/reducer';

const reducer = combineReducers({
    header : headerReducer,
    home : homeReducer,
    detail : homeDetail,
    login : homeLogin
});

export default reducer;