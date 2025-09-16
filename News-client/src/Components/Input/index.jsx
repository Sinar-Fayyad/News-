import styles from './style.module.css'

const Input = ({ type, name, hint, className, required, onChangeListener, label, isPassword, showPassword, onToggleShowPassword, containerClassName }) => {

    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
        <div className={`${styles.inputGroup} ${containerClassName || ''}`.trim()}>
            {label && <label htmlFor={name}>{label}</label>}
            <div className={styles.inputContainer}>
                <input
                    type={inputType}
                    name={name}
                    id={name}
                    placeholder={hint}
                    className={`${className} ${styles.input} ${isPassword ? styles.pwd : ''}`}
                    required={required}
                    onChange={onChangeListener}>
                </input>
                {isPassword && (
                    <>
                        <input
                            type="checkbox"
                            name="showPassword"
                            id={`showPassword-${name}`}
                            className={styles.hideCheckbox}
                            onChange={onToggleShowPassword}
                        />
                        <label htmlFor={`showPassword-${name}`} className={styles.customCheckbox}></label>
                    </>
                )}
            </div>
        </div>
    );
}

export default Input
