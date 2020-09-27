import React from "react";
import { connect } from "react-redux";
import { updateComment } from "../../action/commentActions";
const Comment = ({ comment, updateComment }) => {
  const displayComments = () => {
    if (!!comment) {
      return (
        <div className="comments">
          <h3>{comment.guest.name}</h3>
          <img src={comment.img} width="150" alt="" />
          <p>{comment.text}</p>
          <div id="reaction">
            <div
              title="Like"
              onClick={() => {
                if (comment.like === 0)
                  updateComment(
                    comment.like + 1,
                    comment.laugh,
                    comment.angry,
                    comment
                  );
                else
                  updateComment(
                    comment.like - 1,
                    comment.laugh,
                    comment.angry,
                    comment
                  );
              }}
            >
              {" "}
              <span>{comment.like}</span> 👍
            </div>
            <div
              title="Laugh"
              onClick={() => {
                if (comment.laugh === 0)
                  updateComment(
                    comment.like,
                    comment.laugh + 1,
                    comment.angry,
                    comment
                  );
                else
                  updateComment(
                    comment.like,
                    comment.laugh - 1,
                    comment.angry,
                    comment
                  );
              }}
            >
              {" "}
              <span>{comment.laugh}</span> 😂
            </div>
            <div
              title="Angry"
              onClick={() => {
                if (comment.angry === 0)
                  updateComment(
                    comment.like,
                    comment.laugh,
                    comment.angry + 1,
                    comment
                  );
                else
                  updateComment(
                    comment.like,
                    comment.laugh,
                    comment.angry - 1,
                    comment
                  );
              }}
            >
              {" "}
              <span>{comment.angry}</span> 😡
            </div>
          </div>
        </div>
      );
    } else {
      return <h1 className="chatShow">Loading Comments...</h1>;
    }
  };
  return displayComments();
};
export default connect(null, { updateComment })(Comment);
