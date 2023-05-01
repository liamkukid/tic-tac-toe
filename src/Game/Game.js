import style from "./game.module.scss";
import { useState } from "react";
import Board from "../Board/Board";
import ToogleSwitch from "../ToggleSwitch/ToggleSwitch";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [ascOrder, SetAscOrder] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = ascOrder ? history[currentMove] : history[history.length - 1 - currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = ascOrder ? 
      [...history.slice(0, currentMove + 1), nextSquares] :
      [nextSquares, ...history.slice(history.length - 1 - currentMove)];
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

  const moves = history.map((squares, move) => {
    if (move == currentMove) {
      return;
    }
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
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
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={style.game_info}>
        <ToogleSwitch onToggleSwitchClick={switchOrder}/>
        <ol className={style.move_info}>{ascOrder ? moves : moves.reverse()}</ol>
        <div className={style.current_move}>
          You are at move #{currentMove}
        </div>
      </div>
    </div>
  );
}