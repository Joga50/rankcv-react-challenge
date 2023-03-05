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

  // const {
  //   emailErrorLogin,
  //   setEmailErrorLogin,
  //   passwordErrorLogin,
  //   setPasswordErrorLogin,
  // } = useContext(AuthContext);
  const [emailErrorLogin, setEmailErrorLogin] = useState("");
  const [passwordErrorLogin, setPasswordErrorLogin] = useState("");
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
    <div
      data-testid="login"
      className="login-container flex flex-col justify-center items-center"
    >
      <div className="bg-gradient-to-b from-green-600 to-green-500 rounded-lg p-5 w-1/2 mt-12">
        <h2 className="text-3xl font-bold text-white">Log in</h2>

        {(passwordErrorLogin || emailErrorLogin) && (
          <p className="text-red-500 ">Invalid credentials</p>
        )}
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="email" className="text-xl text-white mb-3 block">
              Email:
            </label>
            <input
              className="bg-white rounded-lg px-4 py-2 w-full"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-xl text-white mb-3 block">
              Password:
            </label>
            <input
              className="bg-white rounded-lg px-4 py-2 w-full"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <button
            className="bg-red-500 hover:bg-red-600 text-white mt-3 px-4 py-2 rounded-lg"
            onClick={handleLogin}
          >
            Log in
          </button>
        </form>
      </div>
      <div className="bg-gradient-to-b from-green-600 to-green-500 rounded-lg p-5 w-1/2 mt-5">
        <h1 className="text-3xl font-bold text-white">
          Go and check all the different cards:
        </h1>
        <Link
          to="/characters"
          className="text-xl text-white block mb-3 hover:text-gray-300"
        >
          Character cards
        </Link>
        <Link
          to="/locations"
          className="text-xl text-white block mb-3 hover:text-gray-300"
        >
          Locations cards
        </Link>
        <Link
          to="/episodes"
          className="text-xl text-white block mb-3 hover:text-gray-300"
        >
          Episodes cards
        </Link>
      </div>
    </div>
  );
};

export default Login;
