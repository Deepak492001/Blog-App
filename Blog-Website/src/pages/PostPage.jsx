import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostByPostId } from "../service/ApiPost";
import { toast, Toaster } from "react-hot-toast";
import CommentCard from "../component/CommentCard.jsx";
import "../CSS/PostPage.css"
import "../CSS/Comments.css"
import geetika from "../assets/geetika.png"
import { UserContext } from "../context/UserContext";
import {
  addComment,
  deleteCommentByCommentId,
  getAllCommentsByPostId,
} from "../service/ApiComment";
import { IoBookmarksOutline, IoBookmarks } from "react-icons/io5";
import {
  addUserBookmark,
  deleteUserBookmarkByPostId,
} from "../service/ApiUserBookmark.js";
import { UserBookmarkContext } from "../context/UserBookmarkContext.jsx";

const PostPage = () => {
  const { currentUser } = useContext(UserContext);
  const { postId } = useParams();
  const [postData, setPostData] = useState({});
  const [allComments, setAllComments] = useState([]);
  const { isPostInBookmarks, userBookmarkPostIds } =
    useContext(UserBookmarkContext);
  const [comment, setComment] = useState({
    commentId: "",
    content: "",
    userEmail: currentUser.data,
    postId: postId,
  });
  const [bookmarked, setBookmarked] = useState(false);



  useEffect(() => {
    checkBookmarkedOrNot();
  }, [userBookmarkPostIds, postId]);

  function checkBookmarkedOrNot() {
    console.log(userBookmarkPostIds);
    console.log(postId);
    console.log(isPostInBookmarks(postId));
    console.log(typeof postId);
    console.log(typeof userBookmarkPostIds[0]);
    if (isPostInBookmarks(postId)) {
      setBookmarked(true);
    } else {
      setBookmarked(false);
    }
  }

  useEffect(() => {
    fetchPostData();
    fetchPostComments();
  }, [postId]);

  // Fetch post data by post ID
  async function fetchPostData() {
    const data = await getPostByPostId(postId);
    setPostData(data.data);
  }

  // Fetch comments for the post
  async function fetchPostComments() {
    const commentData = await getAllCommentsByPostId(postId);
    setAllComments(commentData.data);
  }

  // Handler for adding/deleting bookmarks
  async function bookmarkHandler() {
    setBookmarked((prevBookmarked) => !prevBookmarked);
    const userBookmarks = {
      postId: postId,
      userEmail: currentUser.data,
    };

    if (!bookmarked) {
      const isAdded = await addUserBookmark(userBookmarks);
      if (isAdded !== undefined) {
        toast.success("Bookmarked successfully");
      } else {
        toast.error("Error occurred while adding bookmark");
      }
    } else {
      const isDeleted = await deleteUserBookmarkByPostId(
        postId,
        currentUser.data
      );
      if (isDeleted !== undefined) {
        toast.success("Deleted bookmark successfully");
      } else {
        toast.error("Error occurred while deleting bookmark");
      }
    }
  }

  async function deleteComment(commentId) {
    setAllComments((comments) => {
      return comments.filter((comment) => comment.commentId !== commentId);
    });

    await deleteCommentByCommentId(commentId);
    toast.success("Comment deleted successfully");
  }

  function onChangeHandler(event) {
    const { name, value } = event.target;

    setComment((data) => {
      return { ...data, [name]: value };
    });
  }

  async function onSubmitHandler(event) {
    event.preventDefault();
    console.log(comment);
    const value = await addComment(comment);

    console.log("value is");
    console.log(value);
    if (value !== undefined) {
      if (allComments.length == 0) {
        setAllComments([comment]);
      } else {
        setAllComments((comments) => [...comments, { ...comment }]);
        setComment({ content: " " });
      }
      toast.success("Comment added successfully");
    } else {
      toast.error("Comment not added");
    }

  }
  return (
    <div className="post-container">
      <div className="post-content">
        <div className="post-card">

  {postData.postImage && (
        <img
          src={`data:image/png;base64, ${postData.postImage}`} // Adjust the format according to the actual image type
          alt="Post"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      )}


          <div className="post-body">
            <h5 className="post-title">{postData.postTitle}</h5>
            <span dangerouslySetInnerHTML={{ __html: postData.postContent }} />
            <p className="post-date">{postData.postLastmodified}</p>
          </div>
        </div>
        <div className="bookmark-icon" onClick={bookmarkHandler}>
          {bookmarked ? (
            <IoBookmarks style={{ color: "blue" }} />
          ) : (
            <IoBookmarksOutline style={{ color: "blue" }} />
          )}
        </div>
      </div>

          <div className="separator"></div>

  <div className="comments-section">
        <h2 className="comments-heading">Comments</h2>
        <div className="comments-list">
          {/* Display comments */}
          {allComments &&
            allComments.map((comment) => (
              <CommentCard
                comment={comment}
                setComment={setComment}
                key={comment.commentId}
                deleteComment={deleteComment}
              />
            ))}
        </div>
      </div>

      <form className="comment-form" onSubmit={onSubmitHandler}>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="comment"
            name="content"
            value={comment.content}
            className="form-control form-control-lg"
            onChange={onChangeHandler}
            required={true}
            placeholder="Add Comment"
          />
          <button type="submit" className="comment-btn">Add Comment</button>
        </div>
      </form>
    </div>
  );
};

export default PostPage;
