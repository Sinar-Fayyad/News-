import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../Error Message/index";
import Input from "../Input/index";
import { registerService } from "../../services";
import styles from "./style.module.css";

const SignUpForm = ({ toggle }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async () => {
    setLoading(true);
    setError(null);
    try {
      const userData = { name: `${firstName} ${lastName}`, email, password };
      await registerService(userData);
      navigate("/");
    } catch (err) {
      setError(err.message || "Sign up failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>Sign Up</h2>
      <div className={styles.nameRow}>
        <Input
          label="First Name"
          type="text"
          name="Name"
          hint="Joe"
          required
          onChangeListener={(e) => setFirstName(e.target.value)}
        />
        <Input
          label="Last Name"
          type="text"
          name="lastName"
          hint="Doe"
          required
          containerClassName={styles.inlineInputGroup}
          onChangeListener={(e) => setLastName(e.target.value)}
        />
      </div>
      <Input
        label="Email"
        type="email"
        name="username"
        hint="JoeDoe@example.com"
        required
        onChangeListener={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        hint="********"
        required
        isPassword={true}
        showPassword={showPassword}
        onToggleShowPassword={() => setShowPassword(!showPassword)}
        onChangeListener={(e) => setPassword(e.target.value)}
      />
      <div className={styles.rememberMe}>
        <input
          type="checkbox"
          name="remember-me"
          id="rememberMe"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="rememberMe">Remember Me</label>
      </div>
      <input
        type="submit"
        value={loading ? "Signing Up..." : "Sign Up"}
        onClick={handleSignUp}
        disabled={loading}
      />
      <div className={styles.switch} style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "flex-start" }}>
        <p style={{ margin: 0 }}>You have an account ?</p>
        <button onClick={toggle}>Login</button>
      </div>
      {error && (
        <ErrorMessage
          message={error}
          onClose={() => setError(null)}
        />
      )}
    </div>
  );
};

export default SignUpForm;
