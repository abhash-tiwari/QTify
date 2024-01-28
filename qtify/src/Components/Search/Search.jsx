import React from "react";
import { ReactComponent as SearchIcon } from "../../assests/search-icon.svg"
import styles from "./Search.module.css"

const Search = ({ search }) => {
  return (
    <form className={styles.wrapper}>
      <input className={styles.search} placeholder={search} required></input>
      <button className={styles.searchButton} type="submit">
        {/* <img src="../../../src/assests/Search icon.png" alt="" /> */}
        <SearchIcon/>
      </button>
    </form>
  );
};

export default Search;