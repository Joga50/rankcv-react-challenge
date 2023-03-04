import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        margin: "30px",
        backgroundColor: "gray",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/login">Login page</Link>
      <Link to="/register">Register page</Link>

      <div>
        <Link to="/characters">Characters</Link>
        <Link to="/episodes">Episodes</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <button>Logout</button>
    </div>
  );
}

export default NavBar;
