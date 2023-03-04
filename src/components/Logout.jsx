import React from "react";

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    alert("Sesión cerrada correctamente.");
    window.location.reload();
  };

  return <button onClick={handleLogout}>Cerrar sesión</button>;
};

export default Logout;
