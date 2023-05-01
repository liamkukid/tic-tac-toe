import style from "./toggle_switch.module.scss";

export default function ToogleSwitch({onToggleSwitchClick}) {
    return (
    <div>
        <label className={style.switch}>
        <input type="checkbox" onClick={onToggleSwitchClick}/>
        <span className={`${style.slider} ${style.round}`}></span>
        </label>
    </div>
    );
}