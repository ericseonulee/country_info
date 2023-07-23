import "./InfoPanel.css";

const InfoPanel = (props) => {
  let content =
    props.data.length > 1 ? (
      <>
        <div className="error_multipleResults_title">
          More than one country was found:
        </div>
        <br />
        <div className="error_multipleResults">
          {props.data
            .map((result) => {
              return result.name.common;
            })
            .join(", ")}
        </div>
      </>
    ) : (
      <>
        <ul>
          Common Name:&nbsp;&nbsp;&nbsp;
          <div>{props.data[0].name.common}</div>
        </ul>
        <ul>
          Official Name:&nbsp;&nbsp;&nbsp;
          <div>{props.data[0].name.official}</div>
        </ul>
        <br />
        <li>
          Currency:&nbsp;&nbsp;
          <div>
            {
              props.data[0].currencies[Object.keys(props.data[0].currencies)[0]]
                .name
            }
          </div>
        </li>
        <li>
          Currency Symbol:&nbsp;&nbsp;
          <div>
            {
              props.data[0].currencies[Object.keys(props.data[0].currencies)[0]]
                .symbol
            }
          </div>
        </li>
        <li>
          Language:&nbsp;&nbsp;
          <div>{Object.values(props.data[0].languages).join(", ")}</div>
        </li>
        <li>
          Captital City:&nbsp;&nbsp;<div>{props.data[0].capital[0]}</div>
        </li>
        <li>
          Population:&nbsp;&nbsp;
          <div>{props.data[0].population.toLocaleString("en-US")}</div>
        </li>
      </>
    );
  return <>{content}</>;
};

export default InfoPanel;
