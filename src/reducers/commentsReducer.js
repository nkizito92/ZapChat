const commentsReducer = (state = { comments: [], loading: false }, action) => {
    switch (action.type) {
        case "LOADING_COMMENTS":
            return {
                ...state,
                comments: [...state.comments],
                loading: true
            }

        case "ADD_COMMENTS":
            return {
                ...state,
                comments: action.comments
            }
        default:
            return state
    }
}
export default commentsReducer