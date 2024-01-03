import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { addPost } from "../service/ApiPost";
import { toast, Toaster } from "react-hot-toast";
import JoditEditor from "jodit-react";
import { getAllCategories } from "../service/ApiCategory";
import { UserContext } from "../context/UserContext";

const AddPost = () => {
  const editor = useRef(null);
  const [postContent, setContent] = useState("");
  const [categories, setCategories] = useState([]);

  const config = useMemo(() => ({
    readonly: false,
    placeholder: "Start typing...",
  }), []);

  const { currentUser } = useContext(UserContext);
  const [post, setPost] = useState({
    postTitle: "",
    postContent: "",
    postCategory: "",
    postUser: currentUser.data,
  });

  const fetchCategories = async () => {
    try {
      const categoriesData = await getAllCategories();
      setCategories(categoriesData.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  async function addPostHandler(event) {
    event.preventDefault();
    const value = await addPost(post);

    if (value !== undefined) toast.success("Post added successfully");
    setPost({
      postTitle: "",
      postContent: "",
      postCategory: "",
    });
  }

  function onChangeHandler(event) {
    const { name, value } = event.target;
    setPost(prevPost => ({ ...prevPost, [name]: value }));
  }

  return (
    <>
      <form onSubmit={addPostHandler}>
        <div className="row mb-4">
          <div className="col">
            <div data-mdb-input-init className="form-outline">
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
              {categories.map(postCategory => (
                <option
                  key={postCategory.categoryId}
                  value={postCategory.categoryName}
                >
                  {postCategory.categoryName}
                </option>
              ))}
            </select>

            <label className="form-label" htmlFor="postCategory">
              Category
            </label>
          </div>

          <div className="col">
            <div data-mdb-input-init className="form-outline">
              <JoditEditor
                ref={editor}
                value={post.postContent}
                config={config}
                onChange={newContent => {
                  setPost(prevPost => ({ ...prevPost, postContent: newContent }));
                  setContent(newContent);
                }}
              />

              <label className="form-label" htmlFor="postContent">
                Content
              </label>
            </div>
          </div>
        </div>

        <button
          data-mdb-ripple-init
          type="submit"
          className="btn btn-primary btn-block mb-4"
        >
          Add Post
        </button>

        <button type="reset">Reset</button>
      </form>
     
    </>
  );
};

export default AddPost;
