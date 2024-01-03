import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostByPostId } from "../service/ApiPost";
import { toast, Toaster } from "react-hot-toast";
import CommentCard from "../component/Comment/CommentCard.jsx";
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
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {postData.postTitle}</h5>
          <span
            dangerouslySetInnerHTML={{ __html: postData.postContent }}
          ></span>

          <p className="card-text"> {postData.postLastmodified}</p>
        </div>
      </div>
      <div></div>
      {/*------------------------------------------- Bookmarks icons---------------------------------------- */}

      <span onClick={bookmarkHandler}>
        {bookmarked ? (
          <IoBookmarks style={{ color: "blue" }} />
        ) : (
          <IoBookmarksOutline style={{ color: "blue" }} />
        )}
      </span>

      <h2>Comments </h2>

      {allComments &&
        allComments.map((comment) => {
          return (
            <CommentCard
              comment={comment}
              key={comment.commentId}
              deleteComment={deleteComment}
            />
          );
        })}
      <form onSubmit={onSubmitHandler}>
        {/* <!-- Email input --> */}
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

          <button type="submit">Add Comment</button>
        </div>
      </form>
    </>
  );
};

export default PostPage;
