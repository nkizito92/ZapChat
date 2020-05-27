import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { updateChat } from '../../action/chatActions'

const Chat = ({ chat, updateChat }) => {
    console.log(chat)
    return (
        <div className="chat">
            <h2>{chat.guest.name}</h2> < br />
            <img src={chat.img} alt="" width="100" /> <br /> < br />
            <p>{chat.message}</p>
            <Link to={"chats/" + chat.id}>View Chat</Link> <br />
            <span id="likes">{chat.like}</span> <label> Likes</label><br />
            <button onClick={() => {
                if (chat.like === 0) (updateChat((chat.like + 1), chat.id))
                else ((updateChat(chat.like - 1, chat.id)))
            }

            }>Like up</button>

        </div>
    )
}
export default connect(null, { updateChat })(Chat)