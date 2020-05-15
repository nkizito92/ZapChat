const usersReducer = (state = { users: [], loading: false }, action) => {
    switch (action.type) {
        case "LOADING_USERS":
            return {
                ...state,
                users: [...state.users],
                loading: true
            }
        case "GET_USERS":
            return {
                ...state,
                users: action.users

            }
        case "ADD_USER":
            console.log("The state ", state)
            console.log("actions ", action.user)
            return {
                ...state,
                user: [...state.users, action.user]
            }

        default:
            return state
    }
}

export default usersReducer