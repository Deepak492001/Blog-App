import React, {  useEffect, useState } from "react";
import {
  deletePostById,
  getPostByUser,
  updateByPostId,
} from "../service/ApiPost";

import sorry from "../assets/sorry.png";
import PostCard from "../component/PostCard";
import { useParams } from "react-router-dom";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useParams();
  async function fetchMyPosts() {
    const postData = await getPostByUser(user);
    setPosts(postData.data);
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
          />
        ))
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Sorry No Post Available</h1>
          <img
            style={{ width: "180px", height: "200px" }}
            src={sorry}
            alt="img"
          />
        </div>
      )}
    </>
  );
};

export default MyPosts;
