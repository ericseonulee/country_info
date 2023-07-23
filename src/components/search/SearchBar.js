import { useState } from "react";

import "./SearchBar.css";

function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const queryChangeHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  const clickHandler = () => {
    props.onSearch(searchQuery);
  };

  return (
    <div id="searchBoxContainer">
      <input
        placeholder="Enter a country name"
        type="text"
        value={searchQuery.searchQueryInput}
        name="query"
        onChange={queryChangeHandler}
      ></input>
      <div className="buttonContainer">
        <button type="submit" onClick={clickHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
