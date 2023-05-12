import "./styles.css";
import PropTypes from "prop-types";

function Box({ x = "10px", y = "10px" }) {
  return <div style={{ height: x, width: y }}></div>;
}

Box.propTypes = {
  x: PropTypes.string,
  y: PropTypes.string,
};

export default Box;
