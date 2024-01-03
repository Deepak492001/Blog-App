import React, { useContext } from "react";
import "./Comments.css";
import { UserContext } from "../../context/UserContext";
const CommentCard = ({ comment, deleteComment }) => {
  const { currentUser } = useContext(UserContext);
  return (
    <>
      <section>
        <div className="container my-5 py-5 text-dark">
          <div className="row d-flex justify-content-center">
            <div className="col-md-11 col-lg-9 col-xl-7">
              <div className="d-flex flex-start mb-4">
                <img
                  className="rounded-circle shadow-1-strong me-3"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                  alt="avatar"
                  width="65"
                  height="65"
                />
                <div className="card w-100">
                  <div className="card-body p-4">
                    <div>
                      <h5>{comment.userEmail}</h5>
                      <p className="small">3 hours ago</p>
                      <p>{comment.content}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <a href="#!" className="link-muted me-2">
                            {/* thumbsup sign */}
                            <i className="fas fa-thumbs-up me-1"></i>132
                          </a>
                          <a href="#!" className="link-muted">
                            {/* thumbs down */}
                            <i className="fas fa-thumbs-down me-1"></i>15
                          </a>
                        </div>
                        <a href="#!" className="link-muted">
                          <i className="fas fa-reply me-1"></i> Reply
                        </a>
                      </div>
                      {comment.userEmail === currentUser.data && (
                        <button
                          onClick={() => deleteComment(comment.commentId)}
                        >
                          DELETE COMMENT
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommentCard;
