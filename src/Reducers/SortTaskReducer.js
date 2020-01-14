const initialState = {
    by: 'status',
    value: -1
}

const SortTask = (state = initialState, action) => {
    switch (action.type) {
        case "SORT":
            return action.SortTask;
        default:
            return state;
    }
}
export default SortTask;
