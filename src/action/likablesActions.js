export const fetchLikes = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_LIKES" })
        fetch("http://localhost:3000/likables")
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'ADD_LIKES', likes: data })
            })

    }
}

export const addLikes = (likes) => {
    return {
        type: "ADD_LIKES",
        likes: likes
    }
}

export const createLike = like => {
    return (dispatch) => {
        fetch("http://localhost:3000/likables", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ like: like })
        })
            .then(res => res.json())
            .then(addLike => dispatch(addLike(addLike)))
    }
} 