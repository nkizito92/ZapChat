import React, { useState } from 'react';
import { Link } from "react-router-dom"

const Chat = ({ chat }) => {
    const [likes, setLikes] = useState(0)
    return (
        <div className="chat">
            <h2>{chat.title}</h2> < br />
            <img src={chat.img} alt="" width="100" /> <br /> < br />
            <p>{chat.message}</p>
            <Link to={"chats/" + chat.id}>View Chat</Link> <br />
            <label>Likes: </label><span id="likes">{likes}</span> <br />
            <button onClick={() => {
                if(likes === 0) (setLikes(likes + 1)) 
                 else (setLikes(likes - 1))
                }
                
                }>Like up</button>
                
        </div>
    )
}
export default Chat