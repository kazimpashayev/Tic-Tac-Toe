import { useContext } from 'react';
import TictactoeContext from '../context/tictactoe';
import Square from './Square';
import WinningLine from './WinningLine';

function GameBoard() {
  const { squares, handleSquareClick } = useContext(TictactoeContext);
  return (
    <div className="game-board">
      <Square
        onClick={() => handleSquareClick(0)}
        value={squares[0]}
        className="right-border bottom-border"
      />
      <Square
        onClick={() => handleSquareClick(1)}
        value={squares[1]}
        className="right-border bottom-border"
      />
      <Square
        onClick={() => handleSquareClick(2)}
        value={squares[2]}
        className="bottom-border"
      />
      <Square
        onClick={() => handleSquareClick(3)}
        value={squares[3]}
        className="right-border bottom-border"
      />
      <Square
        onClick={() => handleSquareClick(4)}
        value={squares[4]}
        className="right-border bottom-border"
      />
      <Square
        onClick={() => handleSquareClick(5)}
        value={squares[5]}
        className="bottom-border"
      />
      <Square
        onClick={() => handleSquareClick(6)}
        value={squares[6]}
        className="right-border"
      />
      <Square
        onClick={() => handleSquareClick(7)}
        value={squares[7]}
        className="right-border"
      />
      <Square onClick={() => handleSquareClick(8)} value={squares[8]} />
      <WinningLine />
    </div>
  );
}

export default GameBoard;
