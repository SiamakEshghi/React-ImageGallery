import { combineReducers } from 'redux';
import authReducer from 'reducer/AuthReducer';
import imageReducer from 'reducer/ImageReducer';

export default combineReducers({
    auth: authReducer,
    img: imageReducer
});