import React from "react";
import { Link } from "react-router-dom";
import Register from "./Register";

function Home() {
  return (
    <div>
      <h1>Welcome to the r y morty cards</h1>
      <p> Please if you dont have an account please create one here:</p>
      <Link to="/register">Register page</Link>
      <p> or if you already ahve an account please log here:</p>
      <Link to="/login">Login page</Link>
    </div>
  );
}

export default Home;
