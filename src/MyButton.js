import './Button.scss';

function MyButton( { count, onClick}) {

    return(
        <button className="Main-button" onClick={onClick} role="button">
            Clicked { count } times
        </button>
    );
}

export default MyButton;