import * as types from './../constants/ActionTypes';

var initialState = {
    id : '',
    name : '',
    status : false
};
var reducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.EDITTASK:
            return action.task;
        default:
            return state;
    }
}
export default reducer;