export const fetchComments = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_COMMENTS' })
        fetch('http://localhost:3000/comments').then(res => {
            return res.json()
        }).then(comment => {
                dispatch({ type: 'ADD_COMMENTS', comments: comment})
        })
    }
}

export const addComment = comment => {
    return {
        type: "ADD_COMMENT",
        comment: comment
    }
}

export const createComment = comment => {
    debugger
    return dispatch => {
        fetch('http://localhost:3000/comments', {
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

