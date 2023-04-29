import styles from './button.module.scss';

function MyButton( { count, onClick}) {

    return(
        <button className={styles.MainButton} onClick={onClick}>
            Clicked { count } times
        </button>
    );
}

export default MyButton;