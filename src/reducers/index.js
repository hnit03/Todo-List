import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEdit from './itemEdit';
const reducer = combineReducers({
    tasks,
    isDisplayForm,
    itemEdit
});
export default reducer;