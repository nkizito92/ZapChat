import React from 'react'
import { connect } from 'react-redux'
import { updateComment } from "../../action/commentActions"
const Comment = ({ comment, updateComment }) => {
    console.log(comment)
    const displayComments = () => {
        if (!!comment) {
            return (
                <div className="comments">
                    <h3>{comment.guest.name}</h3>
                    <img src={comment.img} width="150" alt="" />
                    <p>{comment.text}</p>
                    <span id="likes">{comment.like}</span> <label> Likes</label><br />
            <button onClick={() => {
                if (comment.like === 0) (updateComment((comment.like + 1), comment))
                else ((updateComment(comment.like - 1, comment)))
            }

            }>Like</button>
                </div>
                
            )
        } else {
            return <h1 className="chatShow">Loading Comments...</h1>
        }
    }
    return displayComments()
}
export default connect(null, {updateComment})(Comment)