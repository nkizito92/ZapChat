import React, { Component } from 'react'
import Guest from './Guest'
class Guests extends Component {
    displayGuest = () => {
        const { chats } = this.props
        let listOfGuest;
        if (chats[0] !== undefined) {
            listOfGuest = chats.map(chat => <Guest key={chat.guest_id} chat={chat} id={chat.guest_id} />)
        } else {
            return (
                <h2 className="chatShow">There are no Guests</h2>
            )
        }
        return (
            <div>
                {listOfGuest}
            </div>
        )
    }
    render() {
        return (
            <div className="main" key={this.props.id}>
                <h1 className="chatShow">Guests:</h1><br />
                {this.displayGuest()}
            </div>
        )
    }
}



export default Guests