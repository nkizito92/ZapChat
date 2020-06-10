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


export const editComment = (comment) => {
    return {
        type: "EDIT_COMMENT",
        comment: comment
    }
}


export const updateComment = (like, laugh, angry, comment) => {
    return dispatch => {
        fetch(`http://localhost:3000/comments/${comment.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comment: comment,
                like: like,
                laugh: laugh,
                angry: angry
            })
        }

        )
            .then(res => res.json())
            .then(comment => dispatch(editComment(comment)))
            .catch(error => {
                console.log(error)
            })
    }
}

export const removeComment = id => {
    return {
        type: "DELETE_COMMENT",
        comment: id
    }
}

export const deleteComment = commentId => {
    return (dispatch) => {
        fetch(`http://localhost:3000/comments/${commentId}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(commentId => dispatch(removeComment(commentId)))
    }
}


