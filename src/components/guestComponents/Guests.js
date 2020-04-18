import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGuests } from '../../action/guestActions'
import Guest from './Guest'
class Guests extends Component {
    componentDidMount() {
        this.props.fetchGuests()
    }
    render() {
        const { guests } = this.props
        const listOfGuests = guests.map(guest => <Guest key={guest.id} guest={guest} id={guest.id} />)
        return (
            <div>
                {listOfGuests}
            </div>
        )
    }
}

const mSTP = state => {
    return {
        guests: state.guestsReducer.guests,
        loading: state.loading
    }
}


const mDTP = dispatch => {
    return {
        fetchGuests: () => dispatch(fetchGuests())
    }
}


export default connect(mSTP, mDTP)(Guests)