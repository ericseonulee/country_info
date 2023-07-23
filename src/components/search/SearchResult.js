import { useEffect } from "react";

import "./SearchResult.css";

function SearchResult(props) {

  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <div id="searchResultContainer">
      <div className="infoPanel">response</div>
      <div className="imgPanel">something</div>
    </div>
  );
}

export default SearchResult;
