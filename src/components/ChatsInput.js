import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createChat } from '../action/chatActions';

// statefull  and use mapdispatch to props
//for addChat actions
class ChatsInput extends Component {
    state = {
        guest_id: "",
        message: "",
        img: ""
    }
    handleChat = e => {
        this.setState({
            guestId: 1,
            [e.target.name]: e.target.value
        })

    }



    handleSubmit = e => {
        e.preventDefault()
        let chatSet = {
            guest_id: this.state.guestId,
            message: this.state.message,
            img: this.state.img
        }
        this.props.createChat(chatSet)
        debugger
        this.setState({
            quest_id: '',
            message: "",
            img: ""
        })
        this.displayPost()
    }
// supposed to display what is posted.
    displayPost = () => {
        return (
            <div>NOO!!!!! </div>
        )
    }


    render() {
        // Needs to be assisated with guest
      
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <p>Image:</p>
                    <input name="img" onChange={e => this.handleChat(e)} /> <br />
                    <textarea name="message" placeholder="Your chat" onChange={e => this.handleChat(e)} />
                    <input type="submit" onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

export default connect(null, { createChat })(ChatsInput)