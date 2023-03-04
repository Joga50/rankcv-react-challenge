import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Home() {
  return (
    <div>
      <h1>Welcome to the r y morty cards</h1>
      Please if you dont have an account please create one here:
      <Register />
      oe if you already ahve an account please log here:
      <Login />
    </div>
  );
}

export default Home;
