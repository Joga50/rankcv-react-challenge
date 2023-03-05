import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center  blue-container home-container flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-red-500 mb-8">
        Welcome to Rick and Morty's cards
      </h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        What is this application?
      </h2>
      <p
        className="text-lg text-gray-800 mb-8 bg-yellow-200"
        style={{
          backgroundColor: "rgb(300,274,154)",
          height: "auto",
          width: "90%",
          borderRadius: "1rem",
          margin: "5px",
          padding: "15px",
        }}
      >
        This application allows you to search for information about the
        characters, episodes, and places of the animated series Rick and Morty.
        You can add your favorite items to your favorites list and access them
        quickly at any time.
      </p>
      <div
        className="flex flex-col justify-center items-center"
        style={{
          backgroundColor: "rgb(300,274,154)",
          height: "auto",
          width: "50%",
          borderRadius: "1rem",
          margin: "5px",
          padding: "15px",
        }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Join the fun!
        </h2>
        <div className="flex justify-center items-center space-x-4">
          <div>
            <p className="text-gray-700 mt-4">
              Already have an account? Log in{" "}
              <Link className="text-gray-800 mb-4 font-bold" to="/">
                Log in
              </Link>
            </p>
          </div>
        </div>
        <p className="text-gray-700 mt-4">
          Don't have an account yet? Register here!{" "}
          <Link to="/register" className="text-gray-800 mb-4 font-bold">
            Register here!
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
