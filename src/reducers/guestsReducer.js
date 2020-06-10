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

        case "ADD_GUEST":

            return {
                ...state,
                guest: [...state.guests, action.guest]
            }

        case "EDIT_GUEST":
            const guests = state.guests.map(guest => {
                if (guest.id === action.guest.id) {
                    guest.name = action.guest.name
                }
                return guest
            })
            return {
                ...state,
                guests
            }
        default:
            return state
    }
}

export default guestsReducer