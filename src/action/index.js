import * as types from './../constants/ActionTypes';
export const listAll =()=> {
    return {
        type : types.LISTALL
    }
}
export const saveTask =(task)=> {
    return {
        type : types.SAVETASK,
        task//task:task
    }
}
export const toggleForm =()=> {
    return {
        type : types.TOGGLEFORM,
    }
}
export const closeForm =()=> {
    return {
        type : types.CLOSEFORM,
    }
}
export const openForm =()=> {
    return {
        type : types.OPENFORM,
    }
}
export const toggleStatus =(id)=> {
    return {
        type : types.TOGGLESTATUS,
        id
    }
}
export const deleteTask =(id)=> {
    return {
        type : types.DELETETASK,
        id
    }
}
export const editTask =(task)=> {
    return {
        type : types.EDITTASK,
        task
    }
}