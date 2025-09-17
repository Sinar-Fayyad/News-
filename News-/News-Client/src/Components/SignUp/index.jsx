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
  const [error, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async () => {
    setLoading(true);
    setErrorMessage(null);

    if (!password || password.length <= 6) {
      setErrorMessage({ message: "Password must be more than 6 characters." });
      setLoading(false);
      return;
    }

    try {
      const data = await registerService({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      navigate("/main");
    } catch (error) {
      if (error.message.includes("409")) {
        setErrorMessage({
          message: "You already have an account, try to login",
        });
      } else {
        setErrorMessage({ message: error.message });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form">
      <h2 className="title">Sign Up</h2>
      <div className="inputGroup">
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
        value={loading ? "Signing Up..." : "Sign Up"}
        onClick={handleSignUp}
        disabled={loading}
      />
      <div className="switch">
        <p>You have an account ?</p>
        <button className="btn-secondary" onClick={toggle}>Login</button>
      </div>
    </div>
  );
};

export default SignUpForm;
