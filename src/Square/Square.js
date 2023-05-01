import style from "./square.module.scss";

export default function Square({ value, onSquareClick, isWin }) {
  return <button className={`${style.square} ${isWin ? style.win : ''}`} onClick={onSquareClick}>{value}</button>
}