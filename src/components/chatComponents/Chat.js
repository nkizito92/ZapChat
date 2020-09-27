import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { updateChat } from '../../action/chatActions'

const Chat = ({ chat, updateChat }) => {
    return (
        <div className="chat">
            <h2>{chat.guest.name}</h2> < br />
            <img src={chat.img} alt="" width="100" /> <br /> < br />
            <p>{chat.message}</p>
            <Link to={"chats/" + chat.id}>View Chat</Link> <br />
            <div id="reaction">
            <div title="Like"
              onClick={() => {
                if (chat.like === 0)
                  updateChat(chat.like + 1, chat.laugh, chat.angry, chat.id);
                else updateChat(chat.like - 1, chat.laugh, chat.angry, chat.id);
              }}
            >
              {" "}
              <span> {chat.like}</span> 👍
            </div>
            <div title="Laugh"
              onClick={() => {
                if (chat.laugh === 0)
                  updateChat(chat.like, chat.laugh + 1, chat.angry, chat.id);
                else updateChat(chat.like, chat.laugh - 1, chat.angry, chat.id);
              }}
            >
              {" "}
              <span> {chat.laugh}</span> 😂
            </div>
            <div title="Angry"
              onClick={() => {
                if (chat.angry === 0)
                  updateChat(chat.like, chat.laugh, chat.angry + 1, chat.id);
                else updateChat(chat.like, chat.laugh, chat.angry - 1, chat.id);
              }}
            >
              {" "}
              <span> {chat.angry}</span> 😡
            </div>
          </div>

        </div>
    )
}
export default connect(null, { updateChat })(Chat)