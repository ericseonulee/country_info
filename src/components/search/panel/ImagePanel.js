import "./ImagePanel.css";

const ImagePanel = (props) => {
  let content =
    props.data.length > 1 ? (
      ""
    ) : (
      <>
        <img
          src={props.data[0].flags.png}
          alt={"flag of " + props.data[0].name.official}
        />
        <br />
        <img
          src={props.data[0].coatOfArms.png}
          alt={"coat of arms of " + props.data[0].name.official}
        />
      </>
    );
  return <>{content}</>;
};

export default ImagePanel;
