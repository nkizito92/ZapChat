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
                        <p>{chat.message}</p>
                        <a href={window.location.href + "/" + chat.id}>View Chat</a>
                    </li>
                </ul>
            </div>
        )
    }
}