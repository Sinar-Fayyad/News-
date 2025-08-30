import styles from './style.module.css'

const ErrorMessage = ({ message, errorCode, onClose }) => {

    const showError = () => {
        if (errorCode) {
            switch (errorCode) {
                case 401:
                    return "Unauthorized: Wrong email or password.";
                case 403:
                    return "Forbidden: You do not have access.";
                case 500:
                    return "Server error: Please try again later.";
                default:
                    return message || "An error occurred.";
            }
        }
        return message || "An error occurred.";
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.error} main-color`}>
                {showError()}
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                >
                    ×
                </button>
            </div>
        </div>
    );
}
export default ErrorMessage
