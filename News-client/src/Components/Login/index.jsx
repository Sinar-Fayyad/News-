import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../Error Message/index";
import Input from "../Input/index";
import { loginService } from "../../services";
import styles from "./style.module.css";

const LoginForm = ({ toggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const userData = await loginService({ email, password });

      // Check if the user is admin and redirect accordingly
      if (
        userData &&
        (userData.role === "admin" || userData.is_admin === true)
      ) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>Welcome Back</h2>
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
        value={loading ? "Logging in..." : "Log In"}
        onClick={handleLogin}
        disabled={loading}
      />
      <div className={styles.switch} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0 }}>Don't have an account ?</p>
        <button onClick={toggle}>Sign Up</button>
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

export default LoginForm;
