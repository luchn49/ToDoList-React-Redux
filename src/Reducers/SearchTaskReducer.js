const initialState = "";

const SearchTask = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH":
            console.log(action.keyWord)
            return action.keyWord;
        default:
           return state;
    }
}
export default SearchTask;