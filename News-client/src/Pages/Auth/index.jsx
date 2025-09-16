import React, { useState } from "react";
import LoginForm from "../../Components/Login";
import SignUpForm from "../../Components/SignUp";
import styles from "./style.module.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <main>
      <div className={`${styles.register} ${isLogin ? '' : styles.hidden}`} id="log">
        <div className={styles.formContainer}>
          <LoginForm toggle={switchForm} />
        </div>
        <div className={styles.sideText}>
          <div>
            <h3>Welcome to Top News</h3>
            <p>Stay updated with the latest headlines, breaking news, and in-depth stories from around the world. Log in to personalize your news feed and never miss a story.</p>
          </div>
        </div>
      </div>
      <div className={`${styles.register} ${isLogin ? styles.hidden : ''}`} id="sign">
        <div className={styles.sideText}>
          <div>
            <h3>Welcome to Top News</h3>
            <p>Stay updated with the latest headlines, breaking news, and in-depth stories from around the world. Sign up to personalize your news feed and never miss a story.</p>
          </div>
        </div>
        <div className={styles.formContainer}>
          <SignUpForm toggle={switchForm} />
        </div>
      </div>
    </main>
  );
};

export default Auth;
