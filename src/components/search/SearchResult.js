import { useEffect, useState } from "react";

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

  let infoContent = (
    <div className="error_countryNotFound">
      Please enter correct name of a country
    </div>
  );

  if (Object.keys(data).length) {
    if (Object.keys(data).length == 1) {
      infoContent = (
        <>
          <ul>
            Common Name:&nbsp;&nbsp;&nbsp;
            <div>{data[0].name.common}</div>
          </ul>
          <ul>
            Official Name:&nbsp;&nbsp;&nbsp;
            <div>{data[0].name.official}</div>
          </ul>
        </>
      );
    } else {
      infoContent = <>Too many countries</>;
    }
  }

  let imageContent =
    Object.keys(data).length == 1 && data[0].flags ? (
      <>
        <img src={data[0].flags.png} alt={"flag of " + data[0].name.official} />
        <br />
        <img
          src={data[0].coatOfArms.png}
          alt={"coat of arms of " + data[0].name.official}
        />
      </>
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
