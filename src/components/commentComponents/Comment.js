import React from 'react'
const Comment = ({comment}) => {
   const displayComments = () => {
        if (!!comment) {
            return (
                <div className="comments">
                    <h3>{comment.guest.name}</h3>
                    <img src={comment.img} width="150" alt="" />
                    <p>{comment.text}</p>
                </div>
            )
        } else {
            return <h1 className="chatShow">Loading Comments...</h1>
        }
    }
        return displayComments()
}
export default Comment