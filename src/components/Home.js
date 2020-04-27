import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Home extends Component {
    render() {
        const { chats } = this.props
        const listOfChats = chats.map(chat => {
           
            return (
                <div key={chat.id}>
                    <h2>{chat.guest.name}</h2>
                    <img src={chat.img} width="300" alt="" />
                    <p>{chat.message}</p>
                    <Link to={"chats/" + chat.id}>View Chat</Link>
                </div>
            )

        })
        return (
            <div className="main">
                <div className="chatShow">
                    <h1>Welcome to ZapChat</h1>
                    <p>Zap a Chat and comment on there.</p>
                    {listOfChats.slice(0, 3)}
                </div>
            </div>
        )
    }
}

export default Home