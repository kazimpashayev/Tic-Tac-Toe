import { createContext, useState, useEffect } from 'react';
import GameStatus from '../components/gameStatus';
import { winningRules } from '../components/winningRules';

const TictactoeContext = createContext();

const Player_X = 'X';
const Player_O = 'O';

function Provider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(Player_X);
  const [winningLineClass, setWinningLineClass] = useState('');
  const [gameStatus, setGameStatus] = useState(GameStatus.inProgress);

  useEffect(() => {
    checkWinner(squares, setWinningLineClass, setGameStatus);
  }, [squares]);

  const handleSquareClick = (index) => {
    if (squares[index] !== null) {
      return;
    }
    const newSquares = [...squares];
    newSquares[index] = currentPlayer;
    setSquares(newSquares);

    if (currentPlayer === Player_X) {
      setCurrentPlayer(Player_O);
    } else {
      setCurrentPlayer(Player_X);
    }
  };

  const checkWinner = (squares, setWinningLineClass, setGameStatus) => {
    winningRules.forEach(({ rule, winningLineClass }) => {
      // console.log(squares[rule[0]]);
      const squareValue1 = squares[rule[0]];
      const squareValue2 = squares[rule[1]];
      const squareValue3 = squares[rule[2]];

      if (
        squareValue1 !== null &&
        squareValue1 === squareValue2 &&
        squareValue1 === squareValue3
      ) {
        setWinningLineClass(winningLineClass);
        if (squareValue1 === Player_X) {
          setGameStatus(GameStatus.playerXWins);
        } else {
          setGameStatus(GameStatus.playerOWins);
        }
      }
    });
  };

  return (
    <TictactoeContext.Provider
      value={{ squares, handleSquareClick, winningLineClass, gameStatus }}
    >
      {children}
    </TictactoeContext.Provider>
  );
}

export default TictactoeContext;
export { Provider };
