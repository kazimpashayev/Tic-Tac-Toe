import { useContext } from 'react';
import TictactoeContext from '../context/tictactoe';

function useGameContext() {
  return useContext(TictactoeContext);
}

export default useGameContext;
