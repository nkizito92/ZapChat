const chatsReducer = (state = { chats: [], loading: false }, action) => {

    switch (action.type) {
        case "LOADING_CHATS":
            return {
                ...state,
                chats: [...state.chats],
                loading: true
            }

        case "ADD_CHATS":
            return {
                ...state,
                chats: action.type
            }

        default:
            return state
    }

}

export default chatsReducer