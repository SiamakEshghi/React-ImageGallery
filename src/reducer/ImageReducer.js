import * as t from 'action/actionTypes';

const INITIAL_STATE = {
    imageList: []
};


export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case t.SET_PHOTO_LIST: 
            const imageList = action.data.hits;
            return {...state, imageList }
        case t.UPLOAD_PHOTO:
            return {...state, imageList: [...state.imageList, action.newPhoto]}
        default: return state;
    }
}