import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/PostCard.css";
import { MdDelete, MdSystemUpdateAlt } from "react-icons/md";

import geetika from "../assets/geetika.png";

const PostCard = ({ post, deletePost, showButtons, bookMarkedPostIds }) => {
  const [readMore, setReadMore] = useState(false);

  const description = readMore
    ? post.postContent
    : post.postContent.substring(0, 70);

  const readModeHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="card">
      <img src={geetika} className="card-img-top" alt="post-img" />
      <div className="card-body">
        <h5 className="card-title">{post.postTitle}</h5>
        <p
          className="card-description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <span onClick={readModeHandler} className="card-read-more">
          {readMore ? " Show Less" : " Show More"}
        </span>
        <p className="card-text">{post.postLastmodified}</p>
        <Link to={`/show-post/${post.postId}`}>
          <button className="card-button">Read More</button>
        </Link>

        {showButtons && (
          <div>
            <Link to={`/update-post-page/${post.postId}`}>
              <MdSystemUpdateAlt className="update-button" />
            </Link>

            <Link>
              <span onClick={() => deletePost(post.postId)}>
                {" "}
                <MdDelete className=" delete-button" />
              </span>
            </Link>
            {/* <button


            >

            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
