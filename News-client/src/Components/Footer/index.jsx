import styles from "./style.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <p>
          Copyright&copy; 2025 All rights reserved | This template is made with
          by Fluent Team
        </p>
      </div>
      <div className={styles.footerLink}>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Editorial Standards</a>
      </div>
    </div>
  );
};

export default Footer;
