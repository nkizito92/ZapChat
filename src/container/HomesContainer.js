import React, { Component } from 'react'
import Home from "../components/Home"

class HomesContainer extends Component {

    render() {
        return (
            <div>
                <Home guests={this.props.guests} chats={this.props.chats}/>
            </div>
        )
    }
}

export default HomesContainer