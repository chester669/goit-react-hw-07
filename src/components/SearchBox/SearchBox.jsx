import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";

import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      className={styles.searchBox}
      type="text"
      placeholder="Find contacts by name"
      value={filter}
      onChange={handleFilterChange}
    />
  );
};

export default SearchBox;
