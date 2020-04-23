import React, { Component } from 'react'
import { connect } from "react-redux"
import Comment from '../commentComponents/Comment'
import { deleteChat } from '../../action/chatActions'
import { createComment, fetchComments } from '../../action/commentActions'

class ChatShow extends Component {
    componentDidMount() {
        this.props.fetchComments()
    }

    state = {
        text: "",
        img: "",
        name: "",
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChatDelete = () => {
        this.props.deleteChat(Number.parseInt(this.props.id))
        let loadingPage = window.location.href.split(`/${Number.parseInt(this.props.id)}`)[0]
        setTimeout(() => window.location.replace(loadingPage), 1000)
    }
    handleOnSubmit = e => {
        e.preventDefault()
        const newComment = {
            text: this.state.text,
            img: this.state.img,
            name: this.state.name,
            chatId: Number.parseInt(this.props.id)
        }
        this.props.createComment(newComment)
     
        this.setState({
            text: "",
            img: "",
            name: ""
        })
       
    }
    commentPost = (chatComments) => {

        const listedComments = chatComments.map(comment => {
            return (
                <div key={comment.id} >
                    <Comment key={comment.id} comment={comment} />
                    <a href={window.location.href.split(`chats/${comment.chat.id}`).join(`comments/${comment.id}`)}>View Comment</a>
                </div>
            )
        })
        return <div>{listedComments}</div>
    }
    renderChat = (chat) => {
        let chatComment;
        if (this.props.comments[1] !== "") {
            chatComment = this.props.comments.filter(comment => comment.chat_id === Number.parseInt(this.props.id))
        }
        else {
            chatComment = this.props.comments
        }

        if (chat) {
            return (
                <div className="chatShow">
                    <h1>{chat.guest.name}</h1>
                    <img src={chat.img} alt="Car" width="300" />
                    <p>{chat.message}</p> <br />
                    <button onClick={this.handleChatDelete} className="deletebtn">Delete Chat</button>
                    <h2>Comment Section</h2>
                    {this.commentPost(chatComment)}
                    {this.displayPost}
                    <form className="commentForm" onSubmit={e => this.handleOnSubmit(e)}>
                        <h3>Create Comment</h3>
                        <input type="text" name="name" placeholder="Your Name" onChange={e => this.handleChange(e)} value={this.state.name} />  <br />
                        <textarea type="text" name="text" placeholder="Your Text" onChange={e => this.handleChange(e)} value={this.state.text} /> <br />
                        <input type="text" name="img" placeholder="Image URL" onChange={e => this.handleChange(e)} value={this.state.img} /> <br />
                        <input className="btn" type="submit" value="Post Comment" />
                    </form>
                </div>
            )
        }
        else {
            return (
                <h1>
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
        comments: state.commentsReducer.comments,
        loading: state.commentsReducer.loading
    }
}
export default connect(mSTP, { fetchComments, createComment, deleteChat })(ChatShow)