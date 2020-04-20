export const addComment = comment => {
    return {
        type: "ADD_COMMENT",
        comment: comment
    }
}

export const createComment = comment => {
    return dispatch => {
        fetch('http://localhost:3000/chats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comment: comment })
        }

        )
            .then(res => res.json())
            .then(comment => dispatch(addComment(comment)))
            .catch(error => {
                console.log(error)
            })
    }
}

