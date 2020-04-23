import React, { Component } from 'react'
import { updateComment, deleteComment, fetchComments } from '../../action/commentActions'
import { connect } from 'react-redux'

class CommentShow extends Component {

    componentDidMount() {
        this.props.fetchComments()
    }
    state = {
        text: "",
        img: "",
        id: ""
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleOnSubmit = e => {
        e.preventDefault()
        let changeComment = {
            text: this.state.text,
            img: this.state.img,
            id: Number(parseInt(this.props.id))
        }
        this.props.updateComment(changeComment)
        this.setState({
            text: "",
            img: ""
        })
        console.log(this.state)
    }

    handleDelete = e => {
        e.preventDefault()
        this.props.deleteComment(Number(parseInt(this.props.id)))
    }

    displayFilledForm = onComment => {
        if (onComment !== undefined) {
            return (
                <form className="form" onSubmit={e => this.handleOnSubmit(e)} action="">
                    <h1>Change Comment:</h1> <br /><br />
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

    deleteCommentOnClick = () => {
        this.props.deleteComment()
    }
    render() {
        let onComm;
        if (this.props.comments !== "")
            (onComm = this.props.comments.find(comment => comment.id === Number(parseInt(this.props.id))))
        return (
            <div className="main">
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

export default connect(mSTP, { updateComment, deleteComment, fetchComments })(CommentShow)