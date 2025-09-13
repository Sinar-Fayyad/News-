import { useNavigate } from 'react-router-dom';

const Button = ({ title , className, onClickListener}) => {

    return (
        <button className={`${className}`} onClick={onClickListener} >{title}</button>
    );
};

export default Button;