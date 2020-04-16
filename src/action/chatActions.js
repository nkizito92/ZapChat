export const addChat = (chat) => {
    return {
        type: 'ADD_CHAT',
        chat: chat
    }
}
export const fetchChats = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CHATS' })
        fetch('http://localhost:3000/chats').then(res => {
            return res.json()
        }).then(guessChat => {
            const messages = guessChat.map(chat => chat.message)
                dispatch({ type: 'ADD_CHATS', chats: guessChat})
            console.log(messages)
        })
    }

}

export const createChat = (chat) => {
    return (dispatch) => {
        
        fetch('http://localhost:3000/chats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({chat: chat})
        } 
        
        )
        .then(res => res.json())
        .then(chat => dispatch(addChat(chat)))
        .catch(error => {
            console.log(error)
        })
    }
}