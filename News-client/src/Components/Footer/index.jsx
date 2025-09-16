import styles from './style.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.upperFooter}>
                <div className={styles.info + ' hidden'}>
                    <h2 className={styles.infoTitle}>Test</h2>
                    <p>Professional journalism delivering comprehensive news coverage and in-depth analysis since 1985.</p>
                </div>
                <div className={styles.info}>
                    <h2 className={styles.infoTitle}></h2>
                </div>
                <div className={styles.info}>
                    <h2 className={styles.infoTitle}></h2>
                </div>
                <div className={styles.info}>
                    <h2 className={styles.infoTitle}></h2>
                </div>
            </section>
            <hr />
            <section className={styles.lowerFooter}>
                <div>
                    <p>Copyright&copy; 2025 All rights reserved | This template is made with by Fluent Team</p>
                </div>
                <div className={styles.footerLink}>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Editorial Standards</a>
                </div>
            </section>
        </footer>
    );
}

export default Footer
