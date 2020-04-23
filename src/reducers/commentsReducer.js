const commentsReducer = (state = { comments: [], loading: false }, action) => {
    switch (action.type) {
        case "LOADING_COMMENTS":
            return {
                ...state,
                loading: true
            }

        case "ADD_COMMENTS":
            return {
                ...state,
                comments: action.comments
            }
        case "ADD_COMMENT":
            return {
                ...state,
                text: action.text,
                img: action.img,
                name: action.name
            }

        case "EDIT_COMMENT":
            return {
                ...state,
                text: action.text,
                img: action.img
            }

        default:
            return state
    }
}
export default commentsReducer