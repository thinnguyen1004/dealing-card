import PropTypes from "prop-types";
import backCard from "../../assets/1B.svg";
import "./style.css";

function Card({ card = {}, className, isFlip }) {
  return (
    <div className="card-container">
      <div className={className}>
        <div className={`card ${isFlip ? "flipped" : ""}`}>
          <div className="card-front">
            <img src={backCard} width={"100%"} height={"100%"} />
          </div>
          <div className="card-back">
            <img src={card?.image} width={"100%"} height={"100%"} />
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.object,
  className: PropTypes.string,
  isFlip: PropTypes.bool,
};
export default Card;
