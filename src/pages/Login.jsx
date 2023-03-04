import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    const actualUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const userExists = actualUsers.some(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      localStorage.setItem("currentUser", email);
      window.location.reload();
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={(e) => e.preventDefault()}>
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
        <button onClick={handleLogin}>Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
