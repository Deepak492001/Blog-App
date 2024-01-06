// SearchPost component
import React, { useState } from "react";
import "../CSS/SearchPost.css"

const SearchPost = ({ setSearchQuery }) => {
  function onChangeHandler(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="search-container">
      <form action="">
        <input
          placeholder="Enter post title"
          onChange={onChangeHandler}
          type="search"
          name="searchQuery"
          className="search-input"
        />
        <i className="search-icon fas fa-search"></i>
      </form>
    </div>
  );
};

export default SearchPost;
