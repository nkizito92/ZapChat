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
            // const guestId = state.guests.findIndex(guest => guest.id === action.guest.id)
            const guests = state.guests.map(guest => {
                if (guest.id === action.guest.id) {
                    guest.name = action.guest.name
                }
                return guest
            })
            // guests: [the guests before action.guest, action.guest, guests after action.guest]
            return {
                ...state,
                guests
                // ...state,
                // guests: [...state.guests.slice(0, guestId), action.guest, ...state.guests.slice(guestId + 1)]

            }
        default:
            return state
    }
}

export default guestsReducer