import React, { Component } from 'react'
import Chat from "./Chat"
class Chats extends Component {
    render() {
        const { chats } = this.props
        const listChats = chats.map(chat => <Chat key={chat.id} chat={chat} guest={chat.guest} id={chat.id} />)
        return (
            <div className="main">
                {listChats}
            </div>
        )
    }
}


export default Chats