import useGameContext from '../hooks/use-game-context';
import GameStatus from './gameStatus';

function Reset() {
  const { gameStatus, handleReset } = useGameContext();

  if (gameStatus !== GameStatus.inProgress) {
    return (
      <button onClick={handleReset} className="reset">
        Play Again
      </button>
    );
  }
}

export default Reset;
