import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createChat } from '../../action/chatActions';

// statefull  and use mapdispatch to props
//for addChat actions
class ChatsInput extends Component {
    state = {
        name:"",
        // guest_id: "",
        message: "",
        img: ""
    }
    handleChat = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = e => {
        e.preventDefault()
        let chatSet = {
            name: this.state.name,
            message: this.state.message,
            img: this.state.img
        }
        this.props.createChat(chatSet)
        debugger
        this.setState({
            name: '',
            message: "",
            img: ""
        })
    }

    render() {
        
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input name="name" onChange={e => this.handleChat(e)} /> <br />
                    <input name="img" onChange={e => this.handleChat(e)} /> <br />
                    <textarea name="message" placeholder="Your chat" onChange={e => this.handleChat(e)} />
                    <input type="submit" onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

export default connect(null, { createChat })(ChatsInput)