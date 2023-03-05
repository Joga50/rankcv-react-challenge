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
      setNameError("name must have at least 3 characters");
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
      setEmailErrorRegister("El correo electrónico está registrado");
      isValid = false;
    } else {
      setEmailErrorRegister("");
    }

    if (password.length < 9) {
      setPasswordErrorRegister(
        "La contraseña debe tener al menos 9 caracteres"
      );
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
    alert("Usuario registrado correctamente.");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Registrarse</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name">Nombre:</label>
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
          <label htmlFor="email">Correo electrónico:</label>
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
          <label htmlFor="password">Contraseña:</label>
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
        <button onClick={handleRegister}>Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
