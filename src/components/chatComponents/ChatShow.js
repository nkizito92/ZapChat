import React, { Component } from 'react'
import { connect } from "react-redux"
import Comment from '../commentComponents/Comment'
import { createComment } from '../../action/commentActions'
import { deleteChat, removeChat } from '../../action/chatActions'
import { Link } from 'react-router-dom';
class ChatShow extends Component {

    state = {
        text: "",
        img: "",
        name: "",
        error: "",
        update: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChatDelete = () => {
        let completed = document.getElementById("updated")
        completed.className = "complete"
        this.setState({
            update: "Chat Deleted!!"
        })
        this.props.deleteChat(Number.parseInt(this.props.id))
        let loadingPage = this.props.history.location.pathname.split(`/${this.props.id}`)[0]
        setTimeout(() => this.props.history.push(loadingPage), 2200)
    }
    handleOnSubmit = e => {
        e.preventDefault()
        const newComment = {
            text: this.state.text,
            img: this.state.img,
            name: this.state.name,
            chatId: Number.parseInt(this.props.id)
        }

        let name = document.getElementById("name")
        if (!this.state.name) {
            name.className = "errorField"
            this.setState({
                error: "Please fill out the name field"
            })
        } else {
            name.className = ""
            this.props.createComment(newComment)

            this.setState({
                text: "",
                img: "",
                name: "",
                error: ""
            })
        }
    }
    commentPost = (chatComments) => {
        if(chatComments !== undefined) {

            const listedComments = chatComments.map(comment => {
                return (
                    <div key={comment.id} >
                    <Comment key={comment.id} comment={comment} />
                    <Link to={"/comments/"+comment.id}>View Comment</Link>
                </div>
            )
        })
        return <div>{listedComments}</div>
    }
    }
    renderChat = (chat) => {
        let chatComment;
        if (this.props.comments[0] !== undefined) {
            chatComment = this.props.comments.filter(comment => comment.chat_id === Number.parseInt(this.props.id))
        }
        else if (this.props.comments.id === Number.parseInt(this.props.id)) {
            chatComment = this.props.comments 
        }

        if (chat) {
            return (
                <div className="chatShow">
                    <h1>{chat.guest.name}</h1>
                    <div id="updated">{this.state.update}</div><br />
                    <img src={chat.img} alt="" width="300" />
                    <p>{chat.message}</p> <br />
                    <button onClick={this.handleChatDelete} className="deletebtn">Delete Chat</button>
                    <h2>Comment Section</h2>
                    {this.commentPost(chatComment)}
                    {this.displayPost}
                    <form className="commentForm" onSubmit={e => this.handleOnSubmit(e)}>
                        <h3>Create Comment</h3>
                        <div className="error">{this.state.error}</div>
                        <input id="name" type="text" name="name" placeholder="Your Name" onChange={e => this.handleChange(e)} value={this.state.name} />  <br />
                        <textarea type="text" name="text" placeholder="Your Text" onChange={e => this.handleChange(e)} value={this.state.text} /> <br />
                        <input type="text" name="img" placeholder="Image URL" onChange={e => this.handleChange(e)} value={this.state.img} /> <br />
                        <input className="btn" type="submit" value="Post Comment" />
                    </form>
                </div>
            )
        }
        else {
            return (
                <h1 className="chatShow">
                    LOADING...
            
                </h1>
            )
        }
    }
    render() {
        const chat = this.props.chats.find(chat => chat.id === Number.parseInt(this.props.id))
        return (
            <div className="main">
                {this.renderChat(chat)}
            </div>
        )
    }
}

const mSTP = state => {
    return {
        comments: state.commentsReducer.comments
    }
}
export default connect(mSTP, { createComment, deleteChat, removeChat })(ChatShow)