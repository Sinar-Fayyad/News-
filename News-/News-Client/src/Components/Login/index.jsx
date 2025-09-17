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
  const [error, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const data = await loginService({ email, password });
      localStorage.setItem("token", data.token);
      if (data.user && (data.user.role === "admin" || data.user.is_admin)) {
        navigate("/admin");
      } else {
        navigate("/main");
      }
    } catch (error) {
      setErrorMessage({
        message: error.message,
        code: error.response?.status,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form">
      <h2 className="title">Welcome Back</h2>
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
      <div className="rememberMe">
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
        className="btn-primary"
        value={loading ? "Logging in..." : "Log In"}
        onClick={handleLogin}
        disabled={loading}
      />
      <div className="switch">
        <p>Don't have an account ?</p>
        <button className="btn-secondary" onClick={toggle}>Sign Up</button>
      </div>
    </div>
  );
};

export default LoginForm;
