import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { getPostByPostId, updateByPostId } from "../service/ApiPost";
import { UserContext } from "../context/UserContext";
import { getAllCategories } from "../service/ApiCategory";
import JoditEditor from "jodit-react";

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
    // fro temporarily
  });

  const { postId } = useParams();
  async function updatePostHandler(event) {
    // setPosts((prevPosts) => {
    //   return { ...prevPosts, post };
    // });
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
    const categoyData = await getAllCategories();
    setCategories(categoyData.data);
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
      // Handle error, maybe set default values or show an error message
      toast.error("Sorry, Some Error Occurred while Fetching Data");
      console.error("Error fetching post details:", error);
    }
  }

  return (
    <>
      <form onSubmit={updatePostHandler}>
        {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
        <div className="row mb-4">
          <div className="col">
            <div data-mdb-input-init className="form-outline">
              {/* ----------------------------------Title-------------------------------------- */}
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

          {/* ----------------------------------Category-------------------------------------- */}
          <div data-mdb-input-init className="form-outline mb-4">
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

          {/* ----------------------------------Content-------------------------------------- */}
          <div className="col">
            <div data-mdb-input-init className="form-outline">
              <JoditEditor
                ref={editor}
                value={post.postContent}
                config={config}
                onChange={(newContent) => {
                  setPost((prevPost) => ({
                    ...prevPost,
                    postContent: newContent,
                  }));
                  setContent(newContent); // Update local postContent state
                }}
              />

              <label className="form-label" htmlFor="postContent">
                Content
              </label>
            </div>
          </div>
        </div>

        {/* <!-- Submit button --> */}
        <button
          data-mdb-ripple-init
          type="submit"
          className="btn btn-primary btn-block mb-4"
        >
          Update Post
        </button>

        <button type="reset">Reset</button>
      </form>
    </>
  );
};

export default UpdatePostPage;
