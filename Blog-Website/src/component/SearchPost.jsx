import React, { useState } from "react";

const SearchPost = ({ setSearchQuery }) => {
  function onChangeHandler(event) {
    setSearchQuery(event.target.value);
  }
  return (
    <>
      <form action="">
        <input
          placeholder="Enter post title"
          onChange={onChangeHandler}
          type="search"
          name="searchQuery"
        />
      </form>
    </>
  );
};

export default SearchPost;
