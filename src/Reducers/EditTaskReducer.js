const initialState = {};

const EditTask = (state = initialState, action) => {
    switch (action.type) {
        case "EDIT_TASK":
            return action.task
        case "REMOVE_EDIT_TASK":
            return {};
        default:
            return state;
    }
}
export default EditTask;