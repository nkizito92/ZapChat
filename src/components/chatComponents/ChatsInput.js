import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createChat } from '../../action/chatActions';

class ChatsInput extends Component {
    state = {
        name: "",
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
    
        this.setState({
            name: '',
            message: "",
            img: ""
        })
        let loadingPage =  window.location.href.split(`/new`)[0]
        setTimeout(()=> window.location.replace(loadingPage), 1000)
    }

    render() {

        return (
            <div className="main">
                <form onSubmit={e => this.handleSubmit(e)} className="form">
                <h1>New Chat:</h1> <br />
                    <input name="name" onChange={e => this.handleChat(e)} placeholder="Guest Name"  value={this.state.name}/> <br />
                    <input name="img" onChange={e => this.handleChat(e)} placeholder="Image URL"  value={this.state.img}/> <br />
                    <textarea name="message" placeholder="Your Chat" onChange={e => this.handleChat(e)}  value={this.state.message}/> <br />
                    <button className="btn" onClick={this.handleSubmit}>Post Chat</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { createChat })(ChatsInput)