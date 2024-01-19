import React, { useEffect, useState } from "react";
import "../CSS/NoPostMessage.css"
import {
  deletePostById,
  getPostByUser,
  updateByPostId,
} from "../service/ApiPost";

import {toast} from "react-hot-toast"
import PostCard from "../component/PostCard";
import { useParams } from "react-router-dom";
import NoPostMessages from "../component/NoPostMessages";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useParams();
  async function fetchMyPosts() {

    const postData = await getPostByUser(user);
    if (postData !== undefined) {
      setPosts(postData);
    } else {
      toast.error(postData);
    }

  }
  useEffect(() => {
    fetchMyPosts();
  }, []);

  async function deletePost(postId) {
    setPosts((prevPosts) => {
      return prevPosts.filter((post) => post.id !== postId);
    });
    await deletePostById(postId);
    await fetchMyPosts();
  }

  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard
            key={post.postId}
            post={post}
            deletePost={deletePost}
            updateByPostId={updateByPostId}
            showButtons={true}
            showBookMark={false}
            showCommentBox={false}
          />
        ))
      ) : (
        <NoPostMessages/>
      )}
    </>
  );
};

export default MyPosts;
