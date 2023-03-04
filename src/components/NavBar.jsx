import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

function NavBar() {
  const currentUser = localStorage.getItem("currentUser");
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
        {currentUser && <Link to="/favorites">Favorites</Link>}
      </div>
      <Logout />
    </div>
  );
}

export default NavBar;
