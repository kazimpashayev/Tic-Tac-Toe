import GameBoard from './GameBoard';
import GameOver from './GameOver';
import Reset from './Reset';

function TicTacToe() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <GameBoard />
      <GameOver />
      <Reset />
    </div>
  );
}

export default TicTacToe;
