import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { updateChat } from '../action/chatActions'
import { connect } from 'react-redux'
class Home extends Component {
    render() {
        const { chats, updateChat } = this.props
        const listOfChats = chats.map(chat => {

            return (
                <div key={chat.id}>
                    <h2>{chat.guest.name}</h2>
                    <img src={chat.img} width="300" alt="" />
                    <p>{chat.message}</p>
                    <Link to={"chats/" + chat.id}>View Chat</Link> <br />
                    <span id="likes">{chat.like}</span> <label> Likes</label><br />
                    <span id="likes">{chat.laugh}</span> <label> Laugh</label><br />
                    <span id="likes">{chat.angry}</span> <label> Angry</label><br />
                    <button onClick={() => {
                        if (chat.like === 0) (updateChat((chat.like + 1), chat.laugh, chat.angry, chat.id))
                        else ((updateChat(chat.like - 1, chat.laugh, chat.angry, chat.id)))
                    }

                    }>Like</button>


                    <button onClick={() => {
                        if (chat.laugh === 0) (updateChat(chat.like, (chat.laugh + 1), chat.angry, chat.id))
                        else ((updateChat(chat.like, (chat.laugh - 1), chat.angry, chat.id)))
                    }

                    }>laugh</button>

                    <button onClick={() => {
                        if (chat.angry === 0) (updateChat(chat.like, chat.laugh, (chat.angry + 1), chat.id))
                        else ((updateChat(chat.like, chat.laugh, (chat.angry - 1), chat.id)))
                    }

                    }>angry</button>
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

export default connect(null, { updateChat })(Home)