import { combineReducers } from "redux";
import TaskList from './TaskListReducer';
import keyWord from "./SearchTaskReducer";
import SortTask from "./SortTaskReducer";
import SelectedTask from "./EditTaskReducer";


const rootReducer = combineReducers({
    TaskList,
    keyWord,
    SortTask,
    SelectedTask,
})

export default rootReducer;