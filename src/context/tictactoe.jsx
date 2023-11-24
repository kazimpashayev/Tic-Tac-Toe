import { createContext, useState } from 'react';

const TictactoeContext = createContext();

const Player_X = 'X';
const Player_O = 'O';

function Provider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(Player_X);

  // console.log(currentPlayer);

  const handleSquareClick = (index) => {
    // console.log(index);
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

  return (
    <TictactoeContext.Provider value={{ squares, handleSquareClick }}>
      {children}
    </TictactoeContext.Provider>
  );
}

export default TictactoeContext;
export { Provider };
