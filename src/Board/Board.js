import style from "./board.module.scss";
import Square from "../Square/Square";
import calculateWinner from "../functions/CalculateWinner";

export default function Board({ xIsNext, squares, onPlay }) {

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);

  function Rows(number) {
    const rowsArr = [];
    for (let j = 0; j < 3; j++) {
      const index = number * 3 + j;
      const isWin = winner !== null && winner?.includes(index);
      rowsArr.push(
        <Square key={index + 3} value={squares[index]} onSquareClick={() => handleClick(index)} isWin={isWin} />
      )
    }
    return rowsArr;
  }

  return (
    <>
      {[0, 1, 2].map((_, i) => {
        return <div key={i} className={style.board_row}>{Rows(i)}</div>
      })}
    </>
  );
}