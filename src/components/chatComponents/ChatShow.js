import React, { Component } from 'react'
import { connect } from "react-redux"
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
              <div>
                <h3>{comment.guest.name}</h3>
                <img src={comment.img} width="150" alt="Some pic"/>
                 <p>{comment.text}</p>
            </div>
              )  
        })
        return (
            <div>
                {listedComments}
            </div>
        )
    }
    renderChat = (chat) => {
        const chatComment = this.props.comments.filter(comment => comment.chat_id === chat.id)
        if (chat) {
            return (
                <div>
                    <h1>{chat.guest.name}</h1>
                    <img src={chat.img} alt="Car" width="300" />
                    <p>{chat.message}</p>
                    <h1>Comment Section</h1>
                    {this.commentPost(chatComment)}
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
            <div>
                {this.renderChat(chat)}
                <form onSubmit={e => this.handleOnSubmit(e)}>
                    <input type="text" name="name" onChange={e => this.handleChange(e)} />
                    <textarea type="text" name="text" onChange={e => this.handleChange(e)} />
                    <input type="text" name="img" onChange={e => this.handleChange(e)} />
                    <input type="submit" value="Post Comment" />
                </form>
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
export default connect(mSTP, { fetchComments, createComment })(ChatShow)