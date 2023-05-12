import PropTypes from "prop-types";
import './style.css'

function Button({ name, onClick = () => {} }) {
  return (
    <div className="button-container">
      <button className="button" onClick={onClick}>
        {name}
      </button>
    </div>
  );
}
Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;
