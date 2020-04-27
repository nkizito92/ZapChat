import React, { Component } from 'react'
import Chats from "../components/chatComponents/Chats"

class ChatsContainer extends Component {
    
    
    render() {
        return (
            <div>
                <Chats chats={this.props.chats} guests={this.props.guests}/>
            </div>
        )
    }
}


export default ChatsContainer