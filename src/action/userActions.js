
export const getUser = user => {
    return {
        type: 'GET_USER',
        user: user
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_USERS' })
        fetch('http://localhost:3000/users').then(res => {
            return res.json()
        }).then(users => {
            dispatch({ type: 'ADD_USERS', users: users })
        })
    }

}

export const addUser = user => {
    return {
        type: 'ADD_USER',
        user: user
    }
}

export const createUser = user => {
    return (dispatch) => {
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: user })
        })
            .then(res => res.json())
            .then(newUser => dispatch(addUser(newUser)))
            .catch(error => {
                console.log(error)
            })
    }
}