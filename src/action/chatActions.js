import { onlineUrl } from "./urlLink"
export const addChat = (chat) => {
    return {
        type: 'ADD_CHAT',
        chat: chat
    }
}
export const fetchChats = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CHATS' })
        fetch(`${onlineUrl()}/chats`).then(res => {
            return res.json()
        }).then(guessChat => {
            dispatch({ type: 'ADD_CHATS', chats: guessChat })
        })
    }

}


export const addGuest = guest => {
    return {
        type: 'ADD_GUEST',
        guest: guest
    }
}


export const createChat = (chat) => {
    return (dispatch) => {

        fetch(`${onlineUrl()}/chats`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ chat: chat })
        }

        )
            .then(res => res.json())
            .then(chat => dispatch(addChat(chat)))
            .catch(error => {
                console.log(error)
            })
    }

}


export const editChat = chat => {
    return ({
        type: 'EDIT_CHAT',
        chat: chat
    })
}

export const updateChat = (like, laugh, angry, chatId) => {
    return dispatch => {
        fetch(`${onlineUrl()}/chats/${chatId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ like: like, angry: angry, laugh: laugh })
        }

        )
            .then(res => res.json())
            .then(chatData => dispatch(editChat(chatData)))
            .catch(error => {
                console.log(error)
            })
    }
}

export const updateName = (chatId, name) => {
    return dispatch => {
        fetch(`${onlineUrl()}/chats/${chatId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, chatId })
        }

        )
            .then(res => res.json())
            .then(chatData => dispatch(editChat(chatData)))
            .catch(error => {
                console.log(error)
            })
    }
}


export const removeChat = (id) => {
    return {
        type: "DELETE_CHAT",
        chat: id
    }
}

export const deleteChat = (chatId) => {
    return (dispatch) => {
        fetch(`${onlineUrl()}/chats/${chatId}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(chatId => dispatch(removeChat(chatId)))
    }
}
