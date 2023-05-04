import style from "./game.module.scss";
import { useState } from "react";
import Board from "../Board/Board";
import ToogleSwitch from "../ToggleSwitch/ToggleSwitch";
import calculateWinner from "../functions/CalculateWinner";
import calculateLocation from "../functions/CalculateLocation";

export default function Game() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null), index: 0}]);
  const [currentMove, setCurrentMove] = useState(0);
  const [ascOrder, SetAscOrder] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = ascOrder ? history[currentMove]?.squares : history[history.length - 1 - currentMove]?.squares;

  function handlePlay(nextSquares, i) {
    const nextHistory = ascOrder ? 
      [...history.slice(0, currentMove + 1), { squares: nextSquares, index: i}] :
      [{ squares: nextSquares, index: i}, ...history.slice(history.length - 1 - currentMove)];
    setCurrentMove(nextHistory.length - 1);
    setHistory(nextHistory);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function switchOrder() {
    SetAscOrder(!ascOrder);
    const newHistory = history.reverse();
    setHistory(newHistory);
  }

  const winner = calculateWinner(currentSquares);
  let status;
  if (winner) {
    status = 'Winner: ' + (xIsNext ? 'O' : 'X');
  } else if (currentMove === 9) {
    status = 'Draw';
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move # ${move}; location: ${calculateLocation(history[move].index)}`;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  });

  return (
    <div className={style.game}>
      <div className={style.game_board}>
        <div className={style.status}>{status}</div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={style.game_info}>
        <ToogleSwitch onToggleSwitchClick={switchOrder}/>
        <ol className={style.move_info}>{ascOrder ? moves : moves.reverse()}</ol>
        <div className={style.current_move}>
          You are at move #{currentMove + 1}
        </div>
      </div>
    </div>
  );
}