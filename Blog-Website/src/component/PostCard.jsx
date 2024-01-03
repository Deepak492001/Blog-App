import React, { useState } from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post, deletePost, showButtons, bookMarkedPostIds }) => {
  const [readMore, setReadMore] = useState(false);

  const description = readMore
    ? post.postContent
    : post.postContent.substring(0, 70);

  const readModeHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{post.postTitle}</h5>
        <span dangerouslySetInnerHTML={{ __html: description }}></span>
        <span onClick={readModeHandler} style={{ color: "blue" }}>
          {readMore ? " Show Less" : " Show More"}
        </span>
        <p className="card-text">{post.postLastmodified}</p>
        <Link to={`/show-post/${post.postId}`}>
          <button>Read More</button>
        </Link>

        {showButtons && (
          <span>
            {" "}
            <button onClick={() => deletePost(post.postId)}>Delete</button>
            <Link to={`/update-post-page/${post.postId}`}>Update</Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default PostCard;
