import * as types from './../constants/ActionTypes';

var initialState = false;
var reducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.TOGGLEFORM:
            return !state;
        case types.OPENFORM:
            state = true;
            return state;
        case types.CLOSEFORM:
            state = false;
            return state;
        default:
            return state;
    }
}
export default reducer;