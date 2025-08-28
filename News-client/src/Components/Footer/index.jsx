import styles from './style.module.css'

const Footer = ()=>{

    return (
        <div className= {`${styles.footer} main-color text-color `}>
            <h3 className={styles.sentence}> “Your thoughts are safe here. This is your private space.”</h3>
        </div>
    );
}

export default Footer