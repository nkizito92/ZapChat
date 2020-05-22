import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createChat } from '../../action/chatActions';
class ChatsInput extends Component {
    state = {
        title: "",
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
            title: this.state.title,
            message: this.state.message,
            img: this.state.img
        }

        let title = document.getElementById("title")
        if (!this.state.title) {
            title.className = "errorField"
            this.setState({
                error: "Please fill out the Title field"
            })
        } else {
            title.className = ""
            let completed = document.getElementById("updated")
            completed.className = "complete"

            this.props.createChat(chatSet)
            this.setState({
                title: '',
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
                    <input id="title" name="title" onChange={e => this.handleChat(e)} placeholder="Title" value={this.state.title} /> <br />
                    <input name="img" onChange={e => this.handleChat(e)} placeholder="Image URL" value={this.state.img} /> <br />
                    <textarea id="message" name="message" placeholder="Your Chat" onChange={e => this.handleChat(e)} value={this.state.message} /> <br />
                    <button className="btn" onClick={this.handleSubmit}>Post Chat</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { createChat })(ChatsInput)