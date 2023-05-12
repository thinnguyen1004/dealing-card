import { useState } from "react";
import shuffle from "../../../utils/shuffleCard";
import Card from "../../../components/Card/Card";
import Button from "../../../components/Button/Button";
import Box from "../../../components/material/Box";
import { VALUE } from "../../../constants/cardDeck";
import "./style.css";
import WinGameAnimation from "../components/WinGameInformation";

function DealingCardGame() {
  const [cardBot, setCardBot] = useState(null);

  const [cardUser, setCardUser] = useState(null);
  const [finishGame, setFinishGame] = useState(false);
  const [resultGame, setResultGame] = useState(false);

  const handleStartGame = () => {
    const cardShuffled = shuffle(VALUE);
    setCardBot(cardShuffled[0]);
    setCardUser(cardShuffled[1]);
  };

  const isRoundWinner = () => {
    setFinishGame(true);
    setResultGame(parseInt(cardUser.id) > parseInt(cardBot.id));
  };

  const onPlayAgain = () => {
    setCardBot(null);
    setCardUser(null);
    setFinishGame(false);
  };
  return (
    <div className="wrapper">
      <div className="table-container">
        {!cardBot ? (
          <div className="card-play">
            <Card />
            <div className="btn-play">
              <Button name="Play" onClick={handleStartGame} />
            </div>
          </div>
        ) : (
          <>
            <Card
              isFlip={finishGame}
              isWinner={isRoundWinner}
              card={cardBot}
              className={
                resultGame
                  ? "bot-card-animation flip-card"
                  : "bot-card-animation"
              }
            />
            <Box x="80px" />
            {!finishGame ? (
              <Button name="Play" onClick={isRoundWinner} />
            ) : (
              <Button name="Play again" onClick={onPlayAgain} />
            )}
            <Box x="80px" />
            <Card
              card={cardUser}
              isFlip={finishGame}
              className={"user-card-animation"}
            />
          </>
        )}
        {resultGame && <WinGameAnimation isWin={resultGame} />}
      </div>
    </div>
  );
}
export default DealingCardGame;
