import "./styles.css";
import PropTypes from "prop-types";
import youWin from "../../../assets/youwin.png";

export default function WinGameAnimation({ isWin }) {
  return (
    <div className={`win-game-animation ${isWin ? "show" : ""}`}>
      <img src={youWin} width={'100%'} height={'100%'}/>
    </div>
  );
}

WinGameAnimation.propTypes = {
    isWin: PropTypes.bool
}