const uuidv4 = require("uuid/v4");
let data = JSON.parse(localStorage.getItem('TaskList'));

const initialState = data ? data : [];
const TaskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_TASK":
            let newTaskList = [...state];
            let newTask = {
                id: action.newTask.id,
                taskName: action.newTask.taskName,
                taskStatus: action.newTask.taskStatus,
                taskNote: action.newTask.taskNote,
            };
            if (!newTask.id) {
                newTask.id = uuidv4();
                newTaskList = [...newTaskList, newTask];
            } else {
                let index = newTaskList.findIndex((task) => task.id === action.newTask.id);
                newTaskList[index] = newTask;
            }
            localStorage.setItem('TaskList', JSON.stringify(newTaskList))
            return newTaskList;
        case "CHANGE_STATUS_TASK":
            let newState = [...state];
            let index = newState.findIndex((task) => task.id === action.id);
            newState[index].taskStatus = newState[index].taskStatus === "Cao" ? "Thấp" : "Cao";
            localStorage.setItem('TaskList', JSON.stringify(newState))
            return newState;
        case "DELETE_TASK":
            let newStateAfterDel = state.filter(task => task.id !== action.id);
            localStorage.setItem('TaskList', JSON.stringify(newStateAfterDel))
            return newStateAfterDel;
        default:
            return state;
    }
}
export default TaskListReducer;