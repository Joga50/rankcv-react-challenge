import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // FORM VALIDATION

  const [nameError, setNameError] = useState("");

  const {
    passwordErrorRegister,
    setPasswordErrorRegister,
    emailErrorRegister,
    setEmailErrorRegister,
  } = useContext(AuthContext);

  const validateForm = () => {
    let isValid = true;
    if (name.length < 3) {
      setNameError("Name must have at least 3 characters");
      isValid = false;
    } else {
      setNameError("");
    }

    const registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const isEmailRegistered = registeredUsers.some(
      (user) => user.email === email
    );
    if (isEmailRegistered) {
      setEmailErrorRegister("The email address is already registered.");
      isValid = false;
    } else {
      setEmailErrorRegister("");
    }

    if (password.length < 9) {
      setPasswordErrorRegister("The password must have at least 9 characters.");
      isValid = false;
    } else {
      setPasswordErrorRegister("");
    }

    return isValid;
  };

  // --
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = () => {
    if (!validateForm()) {
      return;
    }

    const user = { name, password, email };
    const actualUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const newUsers = [...actualUsers, user];
    localStorage.setItem("registeredUsers", JSON.stringify(newUsers));
    alert("User registered successfully.");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="register-container flex flex-col justify-center items-center">
      <div
        style={{
          backgroundColor: "rgb(190,105,224)",
          height: "auto",
          width: "50%",
          borderRadius: "1rem",

          padding: "15px",
        }}
      >
        <h2>Register</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
            {nameError && <p style={{ color: "red" }}>{nameError}</p>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailErrorRegister && (
              <p style={{ color: "red" }}>{emailErrorRegister}</p>
            )}
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
            {passwordErrorRegister && (
              <p style={{ color: "red" }}>{passwordErrorRegister}</p>
            )}{" "}
          </div>
          <button onClick={handleRegister}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
