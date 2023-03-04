import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        </div>
        <button onClick={handleRegister}>Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
