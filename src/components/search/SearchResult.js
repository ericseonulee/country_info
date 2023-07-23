import { useEffect, useState } from "react";

import InfoPanel from "./panel/InfoPanel";
import ImagePanel from "./panel/ImagePanel";
import "./SearchResult.css";

function SearchResult(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (props.searchResult[0] && props.searchResult[0].status !== 404) {
      if (props.searchResult.length > 0) {
        setData(props.searchResult);
      }
    } else {
      setData({});
    }
  }, [props]);

  let infoContent = Object.keys(data).length ? (
    <InfoPanel data={data} />
  ) : (
    <div className="error_countryNotFound">
      Please enter correct name of a country
    </div>
  );

  let imageContent =
    Object.keys(data).length ? (
      <ImagePanel data={data}></ImagePanel>
    ) : (
      ""
    );

  return (
    <div id="searchResultContainer">
      <div className="infoPanel">{infoContent}</div>
      <div className="imgPanel">{imageContent}</div>
    </div>
  );
}
export default SearchResult;
