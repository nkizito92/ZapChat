// delete will be added later 
import React, { Component } from 'react'
export default class Chat extends Component {
    render() {
        const { chat } = this.props
        return (
            <div>
                <ul>
                    <li>
                        <h1>{chat.guest.name}</h1>
                        <img src={chat.img} alt="Car" width="100" /> <br />
                        {chat.message}
                        <a href={window.location.href+"/" + chat.id}>view Chat</a>
                    </li>
                </ul>
            </div>
        )
    }
}