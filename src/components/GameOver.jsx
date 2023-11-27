import useGameContext from '../hooks/use-game-context';
import GameStatus from './gameStatus';

function GameOver() {
  const { gameStatus } = useGameContext();
  //   console.log(gameStatus);
  switch (gameStatus) {
    case GameStatus.inProgress:
      return <></>;
    case GameStatus.playerXWins:
      return <div className="game-over">X Wins</div>;
    case GameStatus.playerOWins:
      return <div className="game-over">O Wins</div>;
    case GameStatus.draw:
      return <div className="game-over">Draw</div>;
    default:
      return <></>;
  }
}

export default GameOver;
