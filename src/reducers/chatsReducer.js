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
                chats: action.chats,
                img: action.img
            }

        case "ADD_CHAT":
            return {
                ...state,
                message: action.message,
                img: action.img,
                name: action.name
            }

            case "SHOW_CHAT":
                debugger
                return {
                    ...state,
                    chat: action.chat,
                    img: action.img
                }

        default:
            return state
    }

}

export default chatsReducer