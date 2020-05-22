import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createChat } from '../../action/chatActions';
class ChatsInput extends Component {
    state = {
        name: "",
        message: "",
        img: "",
        error: "",
        update: ""
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

        let name = document.getElementById("name")
        if (!this.state.name) {
            name.className = "errorField"
            this.setState({
                error: "Please fill out the name field"
            })
        } else {
            name.className = ""
            let completed = document.getElementById("updated")
            completed.className = "complete"

            this.props.createChat(chatSet)
            this.setState({
                name: '',
                message: "",
                img: "",
                error: "",
                update: "Chat Posted!"
            })

            let loadingPage = this.props.history.location.pathname.split(`/new`)[0]
            setTimeout(() => this.props.history.push(loadingPage), 2200)
        }
    }

    render() {
        return (
            <div className="main">
                <form onSubmit={e => this.handleSubmit(e)} className="form">
                    <h1>New Chat:</h1> <br />
                    <div id="updated">{this.state.update}</div><br />
                    <div className="error">{this.state.error}</div>
                    <input id="name" name="name" onChange={e => this.handleChat(e)} placeholder="Guest Name" value={this.state.name} /> <br />
                    <input name="img" onChange={e => this.handleChat(e)} placeholder="Image URL" value={this.state.img} /> <br />
                    <textarea id="message" name="message" placeholder="Your Chat" onChange={e => this.handleChat(e)} value={this.state.message} /> <br />
                    <button className="btn" onClick={this.handleSubmit}>Post Chat</button>
                </form>
            </div>
        )
    }
}

export default connect(null,{ createChat })(ChatsInput)