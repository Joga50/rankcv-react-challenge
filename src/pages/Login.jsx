import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
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

  const {
    emailErrorLogin,
    setEmailErrorLogin,
    passwordErrorLogin,
    setPasswordErrorLogin,
  } = useContext(AuthContext);

  const handleLogin = () => {
    const actualUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];
    console.log("actualUsers:", actualUsers);

    const user = actualUsers.find((user) => user.email === email);
    if (!user) {
      setEmailErrorLogin(true);
    } else {
      setEmailErrorLogin(false);
    }

    if (password.length < 8) {
      setPasswordErrorLogin(true);
    } else {
      setPasswordErrorLogin(false);
    }

    if (user && password.length >= 8 && user.password === password) {
      localStorage.setItem("currentUser", email);
      window.location.reload();
    }
  };

  return (
    <div className="login-container flex flex-col justify-center items-center">
      <div
        style={{
          backgroundColor: "rgb(110,152,14)",
          height: "auto",
          width: "50%",
          borderRadius: "1rem",
          margin: "5px",
          padding: "15px",
        }}
      >
        <h2>Log in</h2>

        {(passwordErrorLogin || emailErrorLogin) && (
          <p style={{ color: "red" }}>Invalids credentials</p>
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
            <label
              className="text-lg font-medium text-gray-800 mb-2 block"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="border border-gray-400 px-4 py-2 rounded-lg w-72"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            onClick={handleLogin}
          >
            Log in
          </button>
        </form>
      </div>
      <div
        style={{
          backgroundColor: "rgb(110,152,14)",
          height: "auto",
          width: "50%",
          borderRadius: "1rem",
          margin: "5px",
          padding: "15px",
        }}
      >
        <h1>Go and check all the different cards:</h1>
        <Link to="/characters">Character cards</Link>
        <Link to="/locations">Locations cards</Link>
        <Link to="/episodes">Episodes cards</Link>
      </div>
    </div>
  );
};

export default Login;
