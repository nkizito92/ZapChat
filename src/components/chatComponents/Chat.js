import React, { Component } from 'react'
import { Link } from "react-router-dom"
export default class Chat extends Component {
    render() {
        const { chat } = this.props
            return (
                <div className="chat">
                    <h2>{chat.guest.name}</h2> < br />
                    <img src={chat.img} alt="" width="100" /> <br /> < br />
                    <p>{chat.message}</p>
                    <Link to={"chats/" + chat.id}>View Chat</Link>
                </div>
            )
    }
}