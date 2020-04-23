import React, { Component } from 'react'
import Guests from '../components/guestComponents/Guests'
import { fetchGuests } from '../action/guestActions'
import { connect } from 'react-redux'

class GuestsContainer extends Component {
    componentDidMount() {
        this.props.fetchGuests()
    }
    render() {
        return (
            <div>
                <Guests guests={this.props.guests} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        guests: state.guestsReducer.guests,
        loading: state.guestsReducer.loading
    }
}

const mDTP = dispatch => {
    return {
        fetchGuests: () => dispatch(fetchGuests())
    }
}
export default connect(mapStateToProps, mDTP)(GuestsContainer)