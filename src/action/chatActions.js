export const fetchChats = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CHATS' })
        fetch('http://localhost:3000/chats').then(res => {
            return res.json()
        }).then(guessChat => {
            dispatch({ type: 'ADD_CHATS', chats: guessChat.message })
            console.log(guessChat.message)
        })
    }

}