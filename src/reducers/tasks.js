import * as types from './../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data :[];

var s4=()=> {
    return  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
var randomID=()=> {
    return s4() +'-'+ s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

var findIndex = (tasks,id) =>{
    var result = -1;
    tasks.forEach((task,index)=> {
      if(task.id === id){
        result = index;
      }
    });
    return result;
  }

var reducer = (state = initialState, action) =>{
    var id = '';
    var index = -1;
    switch (action.type) {
        case types.LISTALL:
            return state;
        case types.SAVETASK:
            var task ={
                id : action.task.id,
                name : action.task.name,
                status : action.task.status === "true" ? true : false
            };
            if (!task.id) {
                task.id =randomID();
                state.push(task);
            }else{
                index = findIndex(state,task.id);
                state[index] = task;
            }
            console.log('task',[...state]);
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        case types.TOGGLESTATUS:
            id = action.id;
            index = findIndex(state,id);
            state[index] = {
                ...state[index],
                status : !state[index].status
            }
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        case types.DELETETASK:
            id = action.id;
            index = findIndex(state,id);
            state.splice(index,1);
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}
export default reducer;

