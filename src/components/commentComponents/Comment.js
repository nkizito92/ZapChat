import React, { Component } from 'react'
export default class Comment extends Component {
    render() {
        const { comment } = this.props
        return (
            <div className="comments">
                <h3>{comment.guest.name}</h3>
                <img src={comment.img} width="150" alt="Some pic" />
                <p>{comment.text}</p>
            </div>
        )
    }
}