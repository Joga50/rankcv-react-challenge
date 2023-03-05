import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

function NavBar() {
  const currentUser = localStorage.getItem("currentUser");
  return (
    <div className="flex items-center justify-between flex-wrap  p-5 navbar">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <span className="font-semibold text-xl tracking-tight text-gray-300">
            Home
          </span>
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-md lg:flex-grow">
          <Link
            to="/characters"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
          >
            Characters
          </Link>
          <Link
            to="/episodes"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
          >
            Episodes
          </Link>
          <Link
            to="/locations"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
          >
            Locations
          </Link>
          {currentUser && (
            <Link
              to="/favorites"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
            >
              Favorites
            </Link>
          )}
        </div>
        <div>
          <Link
            to="/login"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
          >
            Login page
          </Link>
          <Link
            to="/register"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white"
          >
            Register page
          </Link>
        </div>
      </div>

      <Logout />
    </div>
  );
}

export default NavBar;
