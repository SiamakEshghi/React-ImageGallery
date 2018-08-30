import * as t from 'action/actionTypes';

const INITIAL_STATE = {
    isLogged: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case t.LOG:
            return { ...state, isLogged: action.isLogged };
        default:
            return state;
    }
}