import style from "./app.module.scss";
import { useState } from "react";

export default function Board() {
  return (
    <>
      <div className={style.board_row}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={style.board_row}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={style.board_row}>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return <button className={style.square} onClick={handleClick}>{value}</button>
}