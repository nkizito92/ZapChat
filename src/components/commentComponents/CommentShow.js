import React, { Component } from 'react'
import { updateComment, deleteComment } from '../../action/commentActions'
import { connect } from 'react-redux'

class CommentShow extends Component {
    commentInfo = () => {
        return this.props.comments.find(comment => comment.id === Number(parseInt(this.props.id)))
    }
    state = {
        text: "",
        img: "",
        id: "",
        update: ""
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleOnSubmit = e => {
        e.preventDefault()
        let showedComm = this.props.comments.find(comment => comment.id === Number(parseInt(this.props.id)))
        let changeComment = {
            text: this.state.text,
            img: this.state.img,
            id: Number(parseInt(this.props.id))
        }

        let completed = document.getElementById("updated")
        completed.className = "complete"
        this.props.updateComment(showedComm.like, showedComm.laugh, showedComm.angry, changeComment)
        this.setState({
            text: "",
            img: "",
            update: "Update is Complete!"
        })
        const chatId = this.props.comments.find(comment => comment.id === Number(parseInt(this.props.id))).chat_id
        let loadingPage = this.props.history.location.pathname.split(`comments/${this.props.id}`)[0]
        setTimeout(() => this.props.history.push(loadingPage + "chats/" + chatId), 2200)

    }

    handleDelete = e => {
        e.preventDefault()
        const chatId = this.props.comments.find(comment => comment.id === Number(parseInt(this.props.id))).chat_id
        let loadingPage = this.props.history.location.pathname.split(`comments/${this.props.id}`)[0]
        setTimeout(() => this.props.history.push(loadingPage + "chats/" + chatId), 2200)
        let completed = document.getElementById("updated")
        completed.className = "complete"
        this.props.deleteComment(Number(parseInt(this.props.id)))
        this.setState({
            update: "Deleting Post Complete!"
        })
    }

    displayFilledForm = onComment => {
        if (onComment !== undefined) {
            return (
                <form className="form" onSubmit={e => this.handleOnSubmit(e)} action="">
                    <h1>Change Comment:</h1> <br /><br />
                    <h3>{onComment.guest.name}</h3> <br />
                    <label>Text Field:</label> <br />
                    <textarea type="text" name="text" onChange={e => this.handleChange(e)} placeholder={onComment.text} value={this.state.text} /> <br />
                    <label>Image Field:</label> <br />
                    <input type="text" name="img" onChange={e => this.handleChange(e)} placeholder={onComment.img} value={this.state.img} /> <br />
                    <button className="btn" onClick={this.handleOnSubmit}>Update Comment</button>
                    <button className="deletebtn" onClick={this.handleDelete}>Delete Comment</button>
                </form>
            )
        }
    }
    render() {
        let onComm;
        if (this.props.comments !== "")
            (onComm = this.props.comments.find(comment => comment.id === Number(parseInt(this.props.id))))
        return (
            <div className="main">
                <br /> <div className="chatShow">  <div id="updated">{this.state.update}</div> </div>
                {this.displayFilledForm(onComm)}
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

export default connect(mSTP, { updateComment, deleteComment })(CommentShow)