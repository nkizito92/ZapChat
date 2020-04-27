export const fetchGuests = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_GUESTS" })
        fetch("http://localhost:3000/guests")
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'ADD_GUESTS', guests: data })
            })

    }
}

export const addGuest = guest => {
    return {
        type: 'ADD_GUEST',
        guest: guest
    }
}

export const createGuest = guest => {
    return (dispatch) => {
        fetch('http://localhost:3000/guests', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ guest: guest })
        })
            .then(res => res.json())
            .then(newGuest => dispatch(addGuest(newGuest)))
            .catch(error => {
                console.log(error)
            })
    }
}


export const editGuest = guest => {
    return ({
        type: 'EDIT_GUEST',
        guest: guest
    })
}

export const updateGuest = (guest) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/guests/${guest.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ guest: guest })
        })

            .then(res => res.json())
            .then(guest => {
                dispatch(editGuest(guest))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

