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
                chats: action.chats
            }

        case "ADD_CHAT":
            return {
                ...state,
                chats: [...state.chats, action.chat]
            }

        case "EDIT_CHAT":
            const chats = state.chats.map(chat => {
                if (chat.id === action.chat.id) {
                    chat.guest.name = action.chat.guest.name
                    chat.like = action.chat.like
                    chat.laugh = action.chat.laugh
                    chat.angry = action.chat.angry
                }
                return chat
            })
            return {
                ...state,
                chats
            }

        case "DELETE_CHAT":
            const chatId = state.chats.findIndex(chat => chat.id === Number(parseInt(action.chat.id)))
            return {
                ...state,
                chats: [...state.chats.slice(0, chatId), ...state.chats.slice(chatId + 1)]
            }
        default:
            return state
    }

}

export default chatsReducer