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
                img: action.comment.img,
                comments: [...state.comments, action.comment]
            }
        case "EDIT_COMMENT":
            const commentId = state.comments.findIndex(comment => comment.id === action.comment.id)
            return {
                ...state,
                comments: [...state.comments.slice(0, commentId), action.comment, ...state.comments.slice(commentId + 1)]
            }
        case "DELETE_COMMENT":
            const commId = state.comments.findIndex(comment => comment.id === Number(parseInt(action.comment.id)))
            return {
                ...state,
                comments: [...state.comments.slice(0, commId), ...state.comments.slice(commId + 1)]
            }

        default:
            return state
    }
}
export default commentsReducer