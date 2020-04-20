import React, { Component } from 'react'

class ChatShow extends Component {
   
    renderChat = (chat) => {
        debugger
        if (chat) {
            return (
                <div>
                    <h1>{chat.guest.name}</h1>
                    <img src={chat.img} alt="Car" width="300" />
                    <p>{chat.message}</p>
                </div>
            )
        }
        else {
            return (
                <h1>
                    LOADING...
                </h1>
            )
        }
    }
    render() {
        const chat = this.props.chats.find(chat => chat.id == this.props.id)
        return (
            <div>
                {this.renderChat(chat)}
            </div>
        )
    }
}
export default ChatShow