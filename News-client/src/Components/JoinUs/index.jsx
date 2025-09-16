import styles from "./style.module.css";
import Button from "../Button/index";
import Input from "../Input/index";
import { Mail } from "lucide-react";

const JoinUs = () => {
  return (
    <div className={styles.joinUs}>
      <div className={styles.joinHolder}>
        <div className={styles.header}>
          <Mail className={styles.icon} />
          <h1>Join Us</h1>
        </div>
        <h3>Subscribe to our newsletter to get the latest news directly in yourinbox.</h3>
        <Input
          type="email"
          name="email"
          id="email"
          label="Enter your email"
          hint="JoeDoe@gmail.com"
          className={styles.input}
        />
        <Button title="Subscribe" />
        <p>Join our community and stay updated with the latest news</p>
      </div>
    </div>
  );
};

export default JoinUs;
