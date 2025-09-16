import styles from './style.module.css';
import Button from '../Button/index';

const JoinUs = () => {
  return (
    <div className={styles.joinUs}>
      <div className={styles.joinHolder}>
        <span>Mail Logo</span>
        <h1>Join Us</h1>
        <h3>Subscribe to our newsletter to get the latest news directly in your inbox.</h3>
        <div>
          <input type="email" name="email" id="email" placeholder="Enter your email" title="Enter your email" />
          <Button title="Subscribe" />
        </div>
        <p>Join our community and stay updated with the latest news</p>
      </div>
    </div>
  );
};

export default JoinUs;
