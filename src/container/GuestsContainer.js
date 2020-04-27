import React, { Component } from 'react'
import Guests from '../components/guestComponents/Guests'

class GuestsContainer extends Component {

    render() {
        return (
            <div>
                <Guests chats={this.props.chats} />
            </div>
        )
    }
}
export default GuestsContainer