import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getPostByPostId, updateByPostId } from "../service/ApiPost";
import { UserContext } from "../context/UserContext";
import { getAllCategories } from "../service/ApiCategory";
import JoditEditor from "jodit-react";
import "../CSS/AddPost.css"; // Import the styles from AddPost.css


const UpdatePostPage = () => {
  const { currentUser } = useContext(UserContext);
  const [categories, setCategories] = useState([]);
  const [postContent, setContent] = useState("");
  const editor = useRef(null);
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typing...",
    }),
    []
  );

  const [post, setPost] = useState({
    postTitle: "",
    postContent: "",
    postCategory: "",
    postUser: currentUser.data,
  });

  const { postId } = useParams();

  async function updatePostHandler(event) {
    event.preventDefault();
    console.log(post);
    const value = await updateByPostId(post, postId);
    console.log(value);

    if (value !== undefined) {
      toast.success("Post updated successfully");
    } else {
      toast.error("Post Didn't  Updated");
    }
  }

  function onChangeHandler(event) {
    const { name, value } = event.target;
    setPost((post) => {
      return { ...post, [name]: value };
    });
  }

  useEffect(() => {
    fetchCategories();
    setPostDetails();
  }, []);

  async function fetchCategories() {
    const categoryData = await getAllCategories();
    setCategories(categoryData.data);
  }

  async function fetchPostDetails(postId) {
    return getPostByPostId(postId);
  }

  async function setPostDetails() {
    try {
      const postData = await fetchPostDetails(postId);
      if (postData) {
        setPost(postData.data);
      }
    } catch (error) {
      toast.error("Sorry, Some Error Occurred while Fetching Data");
      console.error("Error fetching post details:", error);
    }
  }

  return (
    <>
      <form onSubmit={updatePostHandler} className="update-post-container">
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input
                type="text"
                id="postTitle"
                className="form-control"
                onChange={onChangeHandler}
                name="postTitle"
                required
                value={post.postTitle}
              />
              <label className="form-label" htmlFor="postTitle">
                Title
              </label>
            </div>
          </div>

          <div className="col">
            <div className="form-outline mb-4">
              <select
                required
                className="select"
                onChange={onChangeHandler}
                name="postCategory"
                value={post.postCategory}
                id="postCategory"
              >
                <option disabled value="">
                  Select an option
                </option>
                {categories.map((postCategory) => {
                  return (
                    <option
                      key={postCategory.categoryId}
                      value={postCategory.categoryName}
                    >
                      {postCategory.categoryName}
                    </option>
                  );
                })}
              </select>
              <label className="form-label" htmlFor="postCategory">
                Category
              </label>
            </div>
          </div>

          <div className="col">
            <div className="form-outline">
              <JoditEditor
                ref={editor}
                value={post.postContent}
                config={config}
                onChange={(newContent) => {
                  setPost((prevPost) => ({
                    ...prevPost,
                    postContent: newContent,
                  }));
                  setContent(newContent);
                }}
              />
              <label className="form-label" htmlFor="postContent">
                Content
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mb-4">
          Update Post
        </button>

        <button type="reset">Reset</button>
      </form>
    </>
  );
};

export default UpdatePostPage;
