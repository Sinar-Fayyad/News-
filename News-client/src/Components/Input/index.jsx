import './style.module.css'

const Input = ({ type, name, hint, className, required , onChangeListener }) => {

    return (
        <input
            type={type}
            name={name}
            placeholder={hint}
            className={`${className} border`}
            required={required}
            onChange={onChangeListener}>
        </input>
    );
}

export default Input