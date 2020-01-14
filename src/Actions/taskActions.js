
export const onSaveTask = newTask => {
    return {
        type: "SAVE_TASK",
        newTask
    }
}
export const changeStatus = (id) => {
    return {
        type: "CHANGE_STATUS_TASK",
        id
    }
}
export const deleteTask = (id) => {
    return {
        type: "DELETE_TASK",
        id
    }
}
export const editTask = (task) => {
    return {
        type: "EDIT_TASK",
        task
    }
}
export const searchTask = (keyWord) => {
    return {
        type: "SEARCH",
        keyWord
    }
}
export const sortTask = (SortTask) => {
    return {
        type: "SORT",
        SortTask
    }
}
export const removeEditStaff = () => {
    return {
        type: "REMOVE_EDIT_TASK"
    }
}