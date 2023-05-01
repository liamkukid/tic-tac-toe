import style from "./square.module.scss";

export default function Square({ value, onSquareClick }) {
  return <button className={style.square} onClick={onSquareClick}>{value}</button>
}