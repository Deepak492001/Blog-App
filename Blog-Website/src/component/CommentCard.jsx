import React, { useContext } from "react";
import "../CSS/CommentCard.css";
import { UserContext } from "../context/UserContext";

const CommentCard = ({ comment, deleteComment }) => {
  const { currentUser } = useContext(UserContext);

  return (
    <section className="comment-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="comment-card">
              <div className="comment-header d-flex align-items-center">
                <img
                  className="user-avatar"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                  alt="avatar"
                />
                <div className="user-info">
                  <h5>{comment.userEmail}</h5>
                  {/* <p className="timestamp">3 hours ago</p> */}
                </div>
              </div>
              <div className="comment-content">
                <p>{comment.content}</p>
              </div>
              <div className="comment-actions d-flex justify-content-between align-items-center">
                {/* <div className="like-dislike">
                  <a href="#!" className="link-muted me-2">
                    <i className="fas fa-thumbs-up me-1"></i>132
                  </a>
                  <a href="#!" className="link-muted">
                    <i className="fas fa-thumbs-down me-1"></i>15
                  </a>
                </div>
                <a href="#!" className="link-muted reply">
                  <i className="fas fa-reply me-1"></i> Reply
                </a> */}
              </div>
              {comment.userEmail === currentUser.data && (
                <button onClick={() => deleteComment(comment.commentId)}>
                  DELETE COMMENT
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentCard;
