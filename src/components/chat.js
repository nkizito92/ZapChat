// delete will be added later 
import React, { Component } from 'react'
export default class Chat extends Component {
    render() {
        const {chat} = this.props
        return (
            <div>
                <ul>
                    <li>
                        <img src={chat.img} alt="Car" width="100"/> <br />
                        {chat.message}
                        
                    </li>
                </ul>
            </div>
        )
    }
}