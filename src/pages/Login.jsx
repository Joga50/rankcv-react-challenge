import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // FORM VALIDATION

  const { emailError, setEmailError, passwordError, setPasswordError } =
    useContext(AuthContext);

  const handleLogin = () => {
    const actualUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const user = actualUsers.find((user) => user.email === email);
    if (!user) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (password.length < 8) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (user && password.length >= 8 && user.password === password) {
      localStorage.setItem("currentUser", email);
      window.location.reload();
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>

      {(passwordError || emailError) && (
        <p style={{ color: "red" }}>email or password invalid</p>
      )}
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button onClick={handleLogin}>Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
