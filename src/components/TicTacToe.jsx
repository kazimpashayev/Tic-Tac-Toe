import GameBoard from './GameBoard';
import GameOver from './GameOver';

function TicTacToe() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <GameBoard />
      <GameOver />
    </div>
  );
}

export default TicTacToe;
