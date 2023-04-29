import './Button.scss';

function MyButton( { count, onClick}) {

    return(
        <button className="Main-button" onClick={onClick}>
            Clicked { count } times
        </button>
    );
}

export default MyButton;