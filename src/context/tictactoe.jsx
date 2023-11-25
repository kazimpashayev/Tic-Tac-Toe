import { createContext, useState, useEffect } from 'react';

const TictactoeContext = createContext();

const Player_X = 'X';
const Player_O = 'O';

function checkWinner(squares, setWinningLineClass) {
  for (const winningRule of winningRules) {
    const { rule, winningLineClass } = winningRule;
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
    }
  }
}

const winningRules = [
  // Rows
  { rule: [0, 1, 2], winningLineClass: 'winning-line-row-1' },
  { rule: [3, 4, 5], winningLineClass: 'winning-line-row-2' },
  { rule: [6, 7, 8], winningLineClass: 'winning-line-row-3' },

  // Columns
  { rule: [0, 3, 6], winningLineClass: 'winning-line-col-1' },
  { rule: [1, 4, 7], winningLineClass: 'winning-line-col-2' },
  { rule: [2, 5, 8], winningLineClass: 'winning-line-col-3' },

  // Diagonals
  { rule: [0, 4, 8], winningLineClass: 'winning-line-diagonal-1' },
  { rule: [2, 4, 6], winningLineClass: 'winning-line-diagonal-2' },
];

function Provider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(Player_X);
  const [winningLineClass, setWinningLineClass] = useState('');

  const handleSquareClick = (index) => {
    // console.log(index);
    if (squares[index] !== null) {
      return;
    }
    const newSquares = [...squares];
    newSquares[index] = currentPlayer;
    setSquares(newSquares);

    // console.log(newSquares);

    if (currentPlayer === Player_X) {
      setCurrentPlayer(Player_O);
    } else {
      setCurrentPlayer(Player_X);
    }
  };

  useEffect(() => {
    checkWinner(squares, setWinningLineClass);
  }, [squares]);

  return (
    <TictactoeContext.Provider
      value={{ squares, handleSquareClick, winningLineClass }}
    >
      {children}
    </TictactoeContext.Provider>
  );
}

export default TictactoeContext;
export { Provider };
