import * as style from './button.css';

interface Props {
    text: string;
    handleOnClick?: () => void;
}

const Button = (props: Props) => {
    const { text, handleOnClick } = props;

    return (
        <button className={style.button} onClick={handleOnClick}>
            {text}
        </button>
    );
};

export default Button;
