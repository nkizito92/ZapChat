import React, { Component } from 'react'
class Home extends Component {
    render() {
        const { chats } = this.props
        const listOfChats = chats.map(chat => {
            return (
                <div key={chat.id}>
                    <h2>{chat.guest.name}</h2>
                    <img src={chat.img}  alt=""/>
            <p>{chat.message}</p>
                </div>
            )

        })
        return (
            <div className="main">
                <div className="chatShow">
                    <h1>Welcome to ZapChat</h1>
                    <p>Zap a Chat and comment on there.</p>
                    {listOfChats.slice(0, 2)}
                </div>
            </div>
        )
    }
}

export default Home