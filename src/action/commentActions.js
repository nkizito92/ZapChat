export const fetchComments = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_COMMENTS' })
        fetch('http://localhost:3000/comments').then(res => {
            return res.json()
        }).then(comment => {
            dispatch({ type: 'ADD_COMMENTS', comments: comment })
        })
        .catch(error => {
            console.log(error)
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


export const editComment = comment => {
    return {
        type: "EDIT_COMMENT",
        comment: comment
    }
}


export const updateComment = comment => {
    return dispatch => {
        fetch('http://localhost:3000/comments/:id', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comment: comment })
        }

        )
            .then(res => res.json())
            .then(comment => dispatch(editComment(comment)))
            .catch(error => {
                console.log(error)
            })
    }
}

export const deleteComment = commentId => {
    return () => {
        fetch(`http://localhost:3000/comments/${commentId}`, {
            method: 'DELETE'
         })
    }
}


