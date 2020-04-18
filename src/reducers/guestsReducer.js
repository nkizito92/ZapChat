const guestsReducer = (state = { guests: [], loading: false }, action) => {
    switch (action.type) {
        case "LOADING_GUESTS":
            return {
                ...state,
                guests: [...state.guests],
                loading: true
            }
        case "ADD_GUESTS":
            return {
                ...state,
                guests: action.guests
            }

        case "EDIT_GUEST":
            return {
                ...state,
                name: action.name
            }

        default:
            return state
    }
}

export default guestsReducer