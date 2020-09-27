import React, { Component } from 'react'
import Chat from "./Chat"
class Chats extends Component {
    state = {
        content: this.props.chats
    }
    displayChats = chatPost => {
        let test = chatPost[0]
        if (test !== undefined) {
            const listChats = chatPost.map(chat => {
                const guest = this.props.guests.find(g => g.id === chat.guest_id)
                return <Chat key={chat.id} chat={chat} guest={guest} id={chat.id} />
            })
            return (
                <div className="main">
                    {listChats}
                </div>
            )
        } else {
            return <div className="main"><br /><h1 className="chatShow">No Chats Posted</h1></div>
        }
    }
    render() {
        return (
            <div className="main">
                <h1 className="chatShow">List Of Chats</h1> <br />
                {this.displayChats(this.state.content)}
            </div>
        )

    }
}


export default Chats