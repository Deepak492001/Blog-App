import React, { useEffect, useState } from "react";
import { getAllCategories } from "../service/ApiCategory";

const Filter = ({ setCategory }) => {
  const [filters, setFilters] = useState([]);

  async function fetchAllCategories() {
    const categoryData = await getAllCategories();
    setFilters(categoryData.data);
  }
  useEffect(() => {
    fetchAllCategories();
  }, []);

  function filterHandler(categroyName) {
    setCategory(categroyName);
  }

  return (
    <>
      <button onClick={() => filterHandler("ALL")}>ALL</button>
      {filters.map((filter) => {
        return (
          <button
            key={filter.categoryId}
            onClick={() => filterHandler(filter.categoryName)}
          >
            {filter.categoryName}{" "}
          </button>
        );
      })}
    </>
  );
};

export default Filter;
