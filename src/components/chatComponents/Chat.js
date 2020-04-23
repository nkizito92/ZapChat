// delete will be added later 
import React, { Component } from 'react'
export default class Chat extends Component {
    render() {
        const { chat } = this.props
            return (
                <div className="chat">
                <h1>{chat.guest.name}</h1> < br/> 
                <img src={chat.img} alt="Car" width="100" /> <br /> < br/>
                <p>{chat.message}</p>
                <a href={window.location.href + "/" + chat.id}>View Chat</a>
            </div>
        )
    }
}